import {Router} from "express";
import {
    hasRole,
    isLogin,
    isLoginOrAdmin,
    isPostAuthor,
    isPostAuthorOrHasRole
} from "../middlewares/authorization.middleware.js";
import {ADMIN} from "../configuration/constants.js";

const router = Router();

router.all('/account/user/:user/role/:role', hasRole(ADMIN))
router.patch(['/account/user/:user', '/forum/post/:postId/comment/:user'], isLogin("user"))
router.delete('/account/user/:user', isLoginOrAdmin("user"))

router.post('/forum/post/:author', isLogin("author"))
router.patch('/forum/post/:postId', isPostAuthor('postId'))
router.delete('/forum/post/:postId', isPostAuthorOrHasRole('postId', 'MODERATOR'))

export default router