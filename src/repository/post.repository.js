import Post from '../models/post.model.js'

export const findDuplicate = async (title, content, author) => {
    return Post.findOne({title, content, author});
}

export const createPost = async (postData) => {
    // const post = new Post(postData);
    // return post.save();
    return Post.create(postData);
}

export const findPostById = postId => Post.findById(postId)

export const deletePost = postId => Post.findByIdAndDelete(postId).exec()

export const addLike = async (postId) => {
    return Post.findByIdAndUpdate(postId, {$inc: {likes: 1}}, {returnDocument: "after"}).exec();
}

export const findPostsByAuthor = async (author) => {
    return Post.find({author: new RegExp(`^${author}`, 'i')}).exec();
}

export const addComment = async (postId, data) => {
    return Post.findByIdAndUpdate(
        {_id: postId},
        {$push: {comments: data}},
        {returnDocument: "after"}).exec();
}

export const findPostsByTags = async (tags) => {
    const regexTags = tags.map(tag => new RegExp(`^${tag}$`, 'i'))
    return Post.find({tags: {$in: regexTags}}).exec()
}

export const findPostsByPeriod = async (dateFrom, dateTo) => {
    return Post.find({
        $or:
            [
                {dateCreated: {$gte: dateFrom}},
                {dateCreated: {$lte: dateTo}}
            ]
    }).exec();
}

export const updatePost = async (postId, data) => {
    const tags = data.tags ?? [];
    delete data.tags;
    data = {...data, $addToSet: {tags}};
    return Post.findByIdAndUpdate(postId, data, {returnDocument: 'after'}).exec();
}