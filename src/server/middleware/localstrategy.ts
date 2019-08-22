import * as passport from 'passport'//used with passport
import * as LocalStrategy from 'passport-local'
import { ComparePassword } from '../utils/security/password'
import db from '../db'

//serialize -- if they login correctly, we add that req.user as a property on our header request
//deserialize-- if they logout, and no longer have a token, we remove that user from the header request moving forward

passport.serializeUser((user, done) => done(null, user));//user always second arg
passport.deserializeUser((user, done) => done(null, user));
//creates a req.user property for you
//removes req.user property

//initialize a new LocalStrategy module. 
//Strategy class which is a method that takes an obj as its arg and an async callback
passport.use(new LocalStrategy.Strategy({
    usernameField: 'email', //these props are defined for you on the function
    session: false//we aren't using this 
},
//callback function (2nd arg for strategy)
    async (email, password, done) => {
        try {
            //find a user by their email (req.bode.email) they provided
            let [user]: any = await db.Users.findOneByEmail(email);
            //if there is a user AND their password they typed, is the same as their hashed user.password in the db...
            if (user && ComparePassword(password, user.password)) {
                delete user.password;//wont send password in response
                done(null, user)//call done (return the user if valid)
            } else {
                done(null, false);//call done with false and don't let them in
            }
        } catch (e) {
            done(e) //call done with the error
        }
    }));


//makes sure to import this middleware in server.ts!