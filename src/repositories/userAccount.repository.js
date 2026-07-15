import UserAccount from '../models/userAccount.model.js';

export const addUser = async (user) => UserAccount.create(user);

export const removeUser = async (userId) => UserAccount
    .findByIdAndDelete(userId, {returnDocument: "after"}).exec();

export const updateUser = async (userId, data) => UserAccount
    .findByIdAndUpdate(userId, data, {returnDocument: 'after'}).exec()

export const getUser = async (user) => UserAccount
    .findById(user).exec()

export const addRole = async (user, role) => UserAccount
    .findByIdAndUpdate(user, {$addToSet: {roles: role}}, {returnDocument: "after"})
    .select({firstName:0, lastName:0}).exec();

export const removeRole = async (user, role) => UserAccount
    .findByIdAndUpdate(user, {$pull: {roles: role}}, {returnDocument: "after"})
    .select({firstName:0, lastName:0}).exec();
