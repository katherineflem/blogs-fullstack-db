import {Router, RequestHandler }from 'express';

//import your database that has the functions you will use to get blogs etc
import db from '../../db'

//express router- start it up
const router = Router();

//validate the users ROLE are they an admin (can they edit)
const isGuest: RequestHandler=(req,res,next)=>{
    if(!req.user || req.user.role !== 'guest'){
        return res.sendStatus(401);
    }else{
        return next()
    }
}

//call functions on router that take in a path (ENDPOINT) and handlers (use these to get info out- a request or response)
router.get('/', async (req, res) => {
    //try to call for the response from the db
    try {
        //put the response to get all blogs in a variable; the response is waiting on the database to resolve the promise with the results and then send them to this endpoint
        let blogs = await db.Blogs.all();
        //send that variable to front
        res.json(blogs)
    }
    //if it fails, send error status
    catch (e) {
        console.log(e);
        res.sendStatus(500)//will see this in console or terminal if promise fails
    }
})

router.get(`/:id`, async(req,res)=>{
    try{
        let [blog]:any= await db.Blogs.one(req.params.id);//requests will have paramaters that you create in the queries- what it needs to fulfill the request
        res.json(blog);
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

//POST A BLOG POST
router.post('/', isGuest, async (req, res)=>{
    try{
        let title= req.body.title
        let content= req.body.content
        let authorid= req.body.authorid
        let blogpost:any= await db.Blogs.post(authorid, title, content)
        await db.blogtags.insertblogtags(blogpost.insertId, req.body.selectedtag)//getting a list of tags
        res.json(blogpost)
    }catch(e){
        console.log(e)
    }
})



//EDIT BLOG POST
router.put('/:id', isGuest, async (req,res)=>{
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


router.delete('/:id', isGuest, async (req, res) => {
    try {
       await db.blogtags.deleteblogtags(req.params.id)
       await db.Blogs.deleteblog(req.params.id);
       res.status(200).json("Good to go!")
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})


//exporting apiRouter 
export default router;