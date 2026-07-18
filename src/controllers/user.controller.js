import * as service from '../services/userAccount.service.js';

export const register = async (req, res, next) => {
    try {
        const user = await service.register(req.body);
        return res.status(201).json(user);
    } catch (error) {
        return next(error);
    }
}

export const login = async (req, res) => {
    const userAccount = await service.getUser(req.principal.username);
    return res.json(userAccount);
}

export const deleteUser = async (req, res, next) => {
    try {
        const user = await service.deleteUser(req.params.user);
        return res.json(user);
    } catch (error) {
        return next(error);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const user = await service.updateUser(req.params.user, req.body);
        return res.json(user);
    } catch (error) {
        return next(error);
    }
}

export const addRole = async (req, res, next) => {
    try {
        const user = await service.addRole(req.params.user, req.params.role);
        return res.json(user);
    } catch (error) {
        return next(error);
    }
}

export const deleteRole = async (req, res, next) => {
    try {
        const user = await service.deleteRole(req.params.user, req.params.role);
        return res.json(user);
    } catch (error) {
        return next(error);
    }
}

export const changePassword = async (req, res) => {
    await service.changePassword(req.principal.username, req.body.password);
    return res.sendStatus(204);
}

export const getUser = async (req, res, next) => {
    try {
        const user = await service.getUser(req.params.user);

        return res.json(user);
    } catch (error) {
        return next(error);
    }
}
