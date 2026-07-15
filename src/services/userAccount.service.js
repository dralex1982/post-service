import * as userAccountRepository from '../repositories/userAccount.repository.js';

export const register = async (user) => {
    try {
        return await userAccountRepository.addUser(user);
    } catch (error) {
        console.log(error);
        throw new Error('User already exists');
    }
}

export const login = async (user) => {
}

export const deleteUser = async (login) => {
    const userAccount = await userAccountRepository.removeUser(login);
    if (!userAccount) {
        throw new Error(`User with login ${login} does not exist`);
    }
    return userAccount;
}

export const updateUser = async (user, data) => {
    const userAccount = await userAccountRepository.updateUser(user, data);
    if (!userAccount) {
        throw new Error(`User with login ${login} does not exist`);
    }
    return userAccount;
}

export const addRole = async (user, role) => {
    role = role.toUpperCase();
    let userAccount = await userAccountRepository.addRole(user, role);
    if (!userAccount) {
        throw new Error(`User with login ${user} does not exist`);
    }
    return userAccount;
}

export const deleteRole = async (user, role) => {
    role = role.toUpperCase();
    let userAccount = await userAccountRepository.removeRole(user, role);
    if (!userAccount) {
        throw new Error(`User with login ${user} does not exist`);
    }
    return userAccount;
}

export const changePassword = async (user, newPassword) => {
}

export const getUser = async (user) => {
    const userAccount = await userAccountRepository.getUser(user);
    if (!userAccount) {
        throw new Error(`User with login ${user} does not exist`);
    }
    return userAccount;
}