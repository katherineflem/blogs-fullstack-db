import * as express from 'express';
//import your database that has the functions you will use to get blogs etc
import db from '../db'

const router = express.Router();


router.get('/', async (req, res) => {
    //try to call for the response from the db
    try {
        //put the response to get all blogs in a variable
        let blogs = await db.Blogs.all();
        //send that variable to front
        res.json(blogs)
    }
    //if it fails, send error status
    catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

router.get(`/:id`, async(req,res)=>{
    try{
        let [blog]:any= await db.Blogs.one(req.params.id);
        res.json(blog);
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

//POST A BLOG POST
router.post('/', async (req, res)=>{
    try{
        let title= req.body.title
        let content= req.body.content
        let authorid= req.body.authorid
        let blogpost= await db.Blogs.post(authorid, title, content)
        console.log(blogpost)
        res.json(blogpost)
    }catch(e){
        console.log(e)
    }
})

//EDIT BLOG POST
router.put('/:id', async (req,res)=>{
    try{
        let id= req.params.id
        let content= req.body.content
        let title= req.body.title
        let editblog= await db.Blogs.edit(id, title, content);
        res.json(editblog)
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

//DELETE BLOG POST-- see tags route for this 
// router.delete('/:id', async (req,res)=>{
//     try{
//         let id= req.params.id
//         let deletepost= await db.Blogs.deleteblog(id);
//         res.json(deletepost)
//     }catch(e){
//         console.log(e);
//         res.sendStatus(500)
//     }
// })

router.delete('/:id', async (req, res) => {
    try {
        await db.Tags.deleteblogtags(req.params.id)
        await db.Blogs.deleteblog(req.params.id);
        res.json("deleted")
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})


//exporting apiRouter 
export default router;