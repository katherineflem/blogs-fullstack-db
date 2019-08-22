//if authenticated, create a token, userid, and role on our response

import * as express from 'express'
import * as passport from 'passport'
import { CreateToken } from '../../utils/security/tokens'

//USER ENTERS THEIR USERNAME/EMAIL AND PASSWORD TO LOGIN
const router = express.Router()
//express routers can accept extra middleware included in the post function
//intercept request and authenticate our user for us
//authenticate LOCAL STRATEGY with 'local'
router.post('/', passport.authenticate('local'), async (req, res, next) => {
    try {
        //if everything they used to log in is correct, we now have a req.user
        //they're officially logged in so we are creating a token
        let token = await CreateToken({ userid: req.user.id });//createtoken promise 
        res.json({

            // what userid is logged in, what their role is and what token validates them
            token,
            role: req.user.role, //can show one route based on roll
            userid: req.user.id  //profile page 
        
        })
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

export default router;