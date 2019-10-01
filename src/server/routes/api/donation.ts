import { Router } from 'express'
import{ charge } from '../../utils/stripe'
const router = Router()
//charge function is in utils folder

//OUR API USES THE TOKEN ID AND AMT TO CHARGE THEIR CARD USING THE CHARGE FUNCTION 

//ROUTE TO POST CHARGE
router.post('/', async (req, res, next) => {
    try {
        //code out our charge 
        let data = await charge(req.body.token.id, req.body.amount);
        console.log(data);
        res.send('Charged')
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

export default router