import {model, Schema} from 'mongoose'
import {USER} from "../configuration/constants.js";

const UserAccountSchema = new Schema({
    _id: {
        type: String,
        required: true,
        alias: 'login'
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    roles: {
        type: [String],
        default: [USER],
    }
}, {
    versionKey: false,
    toJSON:{
        transform(value, ret) {
            ret.login = value._id;
            delete value._id;
        }
    }
})

export default model("UserAccount", UserAccountSchema, 'users');