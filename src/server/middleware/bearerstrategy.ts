//telling our server how to handle a bear token authorization request
import * as passport from 'passport';
import * as BearerStrategy from 'passport-http-bearer'
import { ValidateToken } from '../utils/security/tokens'
import db from '../db'
//validate that the token has a validated user in the db
passport.use(new BearerStrategy.Strategy(async (token, done) => {
    try {
        //validate this token
        let payload = await ValidateToken(token);
        //whos token is this, do they exist in our table?
        let [user]: any = await db.Users.findOneById(payload.userid);
        if (user) {
            delete user.password;
            done(null, user)
        } else {
            done(null, false)
        }
    } catch (e) {
        console.log(e)
        done(e)
    }
}))

//makes sure to import this middleware in server.ts!