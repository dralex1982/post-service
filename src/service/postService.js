import * as postRepository from '../repository/post.repository.js';

export const addPost = async (author, post) => {
    const tags = [...new Set(...post.tags)];
    //if (!postRepository.findDuplicate(author, post.content, author))
    return await postRepository.createPost({author, ...post});
}

export const findPostById = postId => {
    return postRepository.findPostById(postId);
}
export const addLike = (postId) => {
    return postRepository.addLike(postId);
}
export const findPostByAuthor = (author) => {
    return postRepository.findPostsByAuthor(author);
}
export const addComment = (postId, commenter, comment) => {
    return postRepository.addComment(postId, {user: commenter, ...comment});
}
export const deletePost = (postId) => {
    return postRepository.deletePost(postId);
}
export const findPostsByTags = (tags) => {
    tags = tags.split(',')
    tags = Array.isArray(tags) ? tags : [tags];
    return postRepository.findPostsByTags(tags);
}
export const findPostsByPeriod = (dateFrom, dateTo) => {
    return postRepository.findPostsByPeriod(dateFrom, dateTo)
}
export const updatePost = (postId, data) => {
    return postRepository.updatePost(postId, data);
}

