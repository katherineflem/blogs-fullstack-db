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
router.post('/', async (req, res) => {

    try {
        //user is obj on our body
        let email = req.body.email;
        let hash = HashPassword(req.body.password)
        console.log(hash)
        let name = req.body.name
        console.log(req.body.name)
        //overwrite user.password with a hash password
        //await the result of getting the inserted user from our database
        let result: any = await db.Users.insertUser(name, email, hash);//insert a new user 
        //inserting new user that responds with an array and we generate a token from that
        let token = await CreateToken({ userid: result.insertId })//key of userid in obj
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