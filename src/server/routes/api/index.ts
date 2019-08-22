//where you want your routes logic

import { Router } from 'express';
import blogsRouter from './blogs';
import tagsRouter from './tags'

import * as passport from 'passport'

const router = Router()

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if (user) req.user = user;// want to put that user on the request
        return next();//go to the next route (blogs)
    })(req, res, next);//pass along the same req and res obj
})

router.use('/blogs', blogsRouter);

router.use('/tags', tagsRouter)


export default router;

