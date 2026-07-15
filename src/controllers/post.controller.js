import * as service from '../services/postService.js'

export const addPost = async (req, res) => {
    const post = await service.addPost(req.params.user, req.body)
    if (post) {
        return res.status(201).json(post)
    }
}

export const findPostById = async (req, res, next) => {
    try {
        const post = await service.findPostById(req.params.postId)
        return res.json(post)
    } catch (e) {
        return next(e)
    }
}

export const addLike = async (req, res, next) => {
    try {
        await service.addLike(req.params.postId)
        return res.status(204).send()
    } catch (e) {
        return next(e)
    }
}

export const findPostsByAuthor = async (req, res) => {
    const posts = await service.findPostByAuthor(req.params.user);
    return res.json(posts)
}

export const addComment = async (req, res, next) => {
    try {
        const {postId, commenter} = req.params;
        const comment = req.body;
        const post = await service.addComment(postId, commenter, comment);
        return res.json(post)
    } catch (e) {
        return next(e)
    }
}

export const deletePost = async (req, res, next) => {
    try {
        const post = await service.deletePost(req.params.postId)
        return res.json(post)
    } catch (e) {
        return next(e)
    }
}

export const findPostsByTags = async (req, res) => {
    const tags = req.query.values;
    const posts = await service.findPostsByTags(tags);
    return res.json(posts)
}

export const findPostsByPeriod = async (req, res) => {
    const {dateFrom, dateTo} = req.query;
    const posts = await service.findPostsByPeriod(dateFrom, dateTo);
    return res.json(posts);
}

export const updatePost = async (req, res, next) => {
    try {
        const post = await service.updatePost(req.params.postId, req.body);
        return res.json(post);
    } catch (e) {
        return next(e)
    }
}