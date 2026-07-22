import * as postRepository from '../repositories/post.repository.js';

export const addPost = async (author, post) => {
    const tags = [...new Set(post.tags)];
    return await postRepository.createPost({author, ...post, tags});
}

export const findPostById = async postId => {
    const post = await postRepository.findPostById(postId);
    if (!post) {
        throw new Error('No post found with id "' + postId + '"');
    }
    return post;

}
export const addLike = async(postId) => {
    const post = await postRepository.addLike(postId);
    if (!post) {
        throw new Error('No post found with id "' + postId + '"');
    }
    return post;
}
export const findPostByAuthor = async (author) => await postRepository.findPostsByAuthor(author);

export const addComment = (postId, commenter, comment) => {
    return postRepository.addComment(postId, {user: commenter, comment});
}
export const deletePost = (postId) => {
    const post = postRepository.deletePost(postId);
    if (!post) {
        throw new Error('No post found with id "' + postId + '"');
    }
    return post;
}
export const findPostsByTags = (tags) => {
    tags = tags.split(',').map(tag=>tag.trim());
    tags = Array.isArray(tags) ? tags : [tags];
    return postRepository.findPostsByTags(tags);
}
export const findPostsByPeriod = (dateFrom, dateTo) => postRepository.findPostsByPeriod(dateFrom, dateTo)

export const updatePost = (postId, data) => {
    const post = postRepository.updatePost(postId, data);
    if (!post) {
        throw new Error('No post found with id "' + postId + '"');
    }
    return post;
}

