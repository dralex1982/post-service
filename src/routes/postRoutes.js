import {Router} from 'express';

import * as controller from '../controller/postController.js';

const router = Router();

router.post('/post/:user', controller.addPost)
router.get('/post/:postId', controller.findPostById)
router.patch('/post/:postId/like', controller.addLike)
router.get('/posts/author/:user', controller.findPostsByAuthor)
router.patch('/post/:postId/comment/:commenter', controller.addComment)
router.delete('/post/:postId', controller.deletePost)
router.get('/posts/tags', controller.findPostsByTags)
router.get('/posts/period', controller.findPostsByPeriod)
router.patch('/post/:postId', controller.updatePost)