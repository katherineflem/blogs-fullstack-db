import { Router } from 'express';
import db from '../db'


const router = Router()

//GET BLOG TAGS
router.get('/', async (req, res) => {
    try {
        let tags = await db.Tags.getalltags();
        res.json(tags)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

//GET BLOG TAG
router.get('/:blogid', async (req, res) => {
    try {
        let [tag]: any = await db.Tags.getblogtag(req.params.blogid)
        res.json(tag)
        console.log(tag)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})




export default router