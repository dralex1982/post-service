import UserAccount from "../models/userAccount.model.js";
import {ADMIN, MODERATOR, USER} from "./constants.js";

export const createAdmin = async () => {
    let admin = await UserAccount.findById('admin').exec();
    if (!admin) {
        admin = new UserAccount({
            login: 'admin',
            password: 'admin',
            firstName: 'admin',
            lastName: 'admin',
            roles: [USER, MODERATOR, ADMIN],
        });
        await admin.save();
    }
}