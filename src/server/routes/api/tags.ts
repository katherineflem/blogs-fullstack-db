import { Router } from 'express';
import db from '../../db'


const router = Router()

//GET BLOG TAGS
router.get('/', async (req, res) => {
    try {
        let tags = await db.blogtags.getalltags();
        res.json(tags)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

//GET BLOG TAG
router.get('/:blogid', async (req, res) => {
    try {
        let [tag]: any = await db.blogtags.getblogtag(req.params.blogid)
        res.json(tag)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})




export default router