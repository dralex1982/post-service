import {Router} from 'express';

import * as controller from '../controller/postController.js';
import validate from "../middlewares/validation.middleware.js";

const router = Router();

router.post('/post/:user', validate('addPost'), controller.addPost)
router.get('/post/:postId', controller.findPostById)
router.patch('/post/:postId/like', controller.addLike)
router.get('/posts/author/:user', controller.findPostsByAuthor)
router.patch('/post/:postId/comment/:commenter', validate('addComment'), controller.addComment)
router.delete('/post/:postId', controller.deletePost)
router.get('/posts/tags', controller.findPostsByTags)
router.get('/posts/period', validate('dateFormatPeriod', 'query'),controller.findPostsByPeriod)
router.patch('/post/:postId', validate('updatePost'), controller.updatePost)

export default router;