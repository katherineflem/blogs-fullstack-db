//hash the users password
//insert user into the users table
//generate a token
//send the token, userid, and role on our response

import * as express from 'express'
import db from '../../db'
import { CreateToken } from '../../utils/security/tokens'
import { HashPassword } from '../../utils/security/password'

const router = express.Router()

//CREATE A NEW USER 
router.post('/', async (req, res, next) => {

    try {
        //user is obj on our body
        let user = req.body;
        console.log(req.body)
        //overwrite user.password with a hash password
        user.password = HashPassword(req.body.password);
        //await the result of getting the inserted user from our database
        let [result]: any = await db.Users.insertUser(user);//insert a new user 
        //inserting new user that responds with an array and we generate a token from that
        let token = await CreateToken({ userid: result.insertId })
        res.json({
            token,
            role: 'guest',
            userid: result.insertId
        })
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

export default router;