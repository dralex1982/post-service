import {model, Schema} from 'mongoose'

const commentSchema = new Schema({
    user: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    likes: {
        type: Number,
        default: 0
    }
}, {
    _id: false,
    toJSON: {
        transform: (doc, ret) => {
            ret.dateCreated = doc.dateCreated.toISOString().split('.')[0]
        }
    }
})

export default commentSchema