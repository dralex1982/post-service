import {model, Schema} from 'mongoose'
import {USER} from "../configuration/constants.js";
import bcrypt from "bcrypt";

const UserAccountSchema = new Schema({
    _id: {
        type: String,
        required: true,
        alias: 'login'
    },
    password: {
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
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
            delete ret._id;
            delete ret.password;
        }
    }
})

UserAccountSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hashSync(this.password, salt);
})

UserAccountSchema.methods.comparePassword = async function(plainTextPassword) {
    return bcrypt.compare(plainTextPassword, this.password)
}

export default model("UserAccount", UserAccountSchema, 'users');