//where you want your routes logic

import { Router } from 'express';
import blogsRouter from './blogs';
import tagsRouter from './tags';
import donateRouter from './donation'
import * as passport from 'passport'
import contactRouter from './contact'

const router = Router()

router.use('/contact', contactRouter)

router.use('/donate', donateRouter)

//any api requests will validate the token and user with this middleware
router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user) => {
        console.log(user)
        if (user) req.user = user;// want to put that user on the request
        return next();//go to the next route (blogs)
    })(req, res, next);//pass along the same req and res obj-- immedietly invokes function without giving it a name
})

router.use('/blogs', blogsRouter);

router.use('/tags', tagsRouter)

// router.use('/donate'), donateRouter

export default router;

