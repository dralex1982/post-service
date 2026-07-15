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
    try {
        const user = await service.login(req.auth);
        return res.json(user);
    } catch (error) {
        return res.status(401).send();
    }
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
    try {
        const user = await service.changePassword(req.auth.user, req.body);
        return res.status(204).send(user);
    } catch (error) {
        return res.status(401).send();
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await service.getUser(req.params.user);

        return res.json(user);
    } catch (error) {
        return next(error);
    }
}
