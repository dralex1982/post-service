import {model, Schema} from 'mongoose'
import Comment from './comments.model.js'

const postSchema = new Schema({
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: String,
            required: true,
            trim: true,
        },
        dateCreated: {
            type: Date,
            default: Date.now,
        },
        tags: {
            type: [String],
            default: []
        },
        likes: {
            type: Number,
            default: 0
        },
        comments: {
            type: [Comment],
            default: []
        }
    }, {
        versionKey: false,
        timestamps: true,
    toJSON: {
            transform: (doc, ret) => {
                ret.id = doc._id;
                delete ret._id;
                delete ret.createdAt;
                delete ret.updatedAt;
                // 2026-07-06T17:36:14.892Z -> 2021-12-14T11:39:05
                ret.dateCreated = doc.dateCreated.toISOString().split('.')[0]
            }
    }
    }
)

export default model("Post", postSchema, 'posts')