import * as service from '../service/postService.js'

export const addPost = async (req, res) => {
    const post = await service.addPost(req.params.user, req.body)
    if (post) {
        return res.status(201).send({
            "id": post.id,
            "title": post.title,
            "content": post.content,
            "author": req.params.user,
            "dateCreated": post.dateCreated,
            "tags": post.tags,
            "likes": 0,
            "comments": []
        })
    }
}

export const findPostById = async (req, res) => {
    const post = await service.findPostById(req.params.postId)
    if (post) {
        return res.status(200).send(getPostLikeObj(post))
    } else return res.status(404).send()
}

export const addLike = async (req, res) => {
    if (service.addLike(req.params.postId))
        return res.status(204).send()
    else return res.status(404).send()
}

export const findPostsByAuthor = async (req, res) => {
    const posts = service.findPostByAuthor(req.params.user);
    if (posts) return res.status(200).send(getPostsLikeObj(posts))
}

export const addComment = async (req, res) => {
    const {postId, commenter} = req.params;
    const comment = req.body;
    const success = await service.addComment(postId, commenter, comment);
    const post = findPostById(postId);
    if (success) {
        return res.status(200).send({
            "id": post.id,
            "title": post.title,
            "content": post.content,
            "author": commenter,
            "dateCreated": post.dateCreated,
            "tags": post.tags,
            "likes": post.likes,
            "comments": post.comments
        })
    }
}

export const deletePost = async (req, res) => {
    const post = service.deletePost(req.params.postId)
    if (post) {
        return res.status(200).send({
            "id": req.params.postId,
            "title": post.title,
            "content": post.content,
            "author": post.author,
            "dateCreated": post.dateCreated,
            "tags": post.tags,
            "likes": post.likes,
            "comments": post.comments
        })
    } else return res.status(404).send(
        {
            "timestamp": new Date().toISOString(),
            "status": 404,
            "error": "Not Found",
            "message": "Post with id = ${req.params.postId} not found",
            "path": req.path
        }
    )
}

export const findPostsByTags = async (req, res) => {
    const tags = req.query.values;
    const posts = await service.findPostsByTags(tags);
    if (posts) return res.status(200).send(getPostsLikeObj(posts))
}

export const findPostsByPeriod = async (req, res) => {
    const {dateFrom, dateTo} = req.query;
    const posts = await service.findPostsByPeriod(dateFrom, dateTo);
    if (posts) return res.status(200).send(getPostsLikeObj(posts));
}

export const updatePost = async (req, res) => {
    const post = service.updatePost(req.params.postId);
    if (post) {
        return res.status(200).send(getPostLikeObj(post));
    } else return res.status(404).send()
}

const getPostLikeObj = post => {
    return {
        "id": post.id,
        "title": post.title,
        "content": post.content,
        "author": post.user,
        "dateCreated": post.dateCreated,
        "tags": post.tags,
        "likes": post.likes,
        "comments": post.comments
    }
}

const getPostsLikeObj = posts => {
    return posts.map(post => ({
        "id": post.id,
        "title": post.title,
        "content": post.content,
        "author": post.user,
        "dateCreated": post.dateCreated,
        "tags": post.tags,
        "likes": post.likes,
        "comments": post.comments
    }))
}