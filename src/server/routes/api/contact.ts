import {Router} from 'express'
import { sendEmail } from '../../utils/mailgun'
const router=Router()

router.post('/', async (req,res)=>{
    try{
        await sendEmail('katherinemarief@gmail.com',req.body.email, req.body.subject, req.body.message)
        res.send("email sent!")
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

export default router