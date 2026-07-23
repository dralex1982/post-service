import {findPostById} from "../services/postService.js";

export const hasRole = role => (req, res, next) => {
    req.principal.roles.includes(role.toUpperCase().trim())
        ? next() : res.status(403).send({message: 'Access denied'});
}

export const isLogin = (paramName) => (req, res, next) => {
    req.principal.username === req.params[paramName]
        ? next() : res.status(403).send({message: 'Access denied'});
}

export const isLoginOrAdmin = () => (req, res, next) => {
    req.principal.username === req.params.user || req.principal.roles.includes('ADMIN')
        ? next() : res.status(403).send({message: 'Access denied'});
}

export const isPostAuthor = (postIdParam = 'postId') => async (req, res, next) => {
    const postId = req.params[postIdParam];
    const post = await findPostById(postId);
    return post.author === req.principal.username
        ? next() : res.status(403).send({message: 'Access denied'});
}

export const isPostAuthorOrHasRole = (postIdParam = 'postId', role) => async (req, res, next) => {
    const postId = req.params[postIdParam];
    const post = await findPostById(postId);
    return post.author === req.principal.username || req.principal.roles.includes(role.toUpperCase().trim())
        ? next() : res.status(403).send({message: 'Access denied'});
}