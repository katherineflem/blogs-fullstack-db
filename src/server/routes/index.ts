//where you want your routes logic

import {Router} from 'express';
import blogsRouter from './blogs';
import tagsRouter from './tags'

const router=Router()

router.use('/blogs', blogsRouter);

router.use('/tags', tagsRouter)

export default router;

