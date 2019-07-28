import * as express from 'express';
//import your database that has the functions you will use to get blogs etc
import db from '../db'

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('api/blogs', async (req, res) => {
    //try to call for the response from the db
    try {
        //put the response to get all blogs in a variable
        let r = await db.Blogs.all();
        //send that variable to front
        res.send(r)
    }
    //if it fails, send error status
    catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})





export default router;