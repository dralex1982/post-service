import * as service from '../service/userService.js';

export const addUser = async (req, res) => {
    try {
        const user = await service.register(req.body);
        return res.status(201).json(user);
    } catch (error) {
        return res.status(409).send();
    }
}

export const login = async (req, res) => {
    try {
        const user = await service.login(req.auth);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(401).send();
    }
}

export const deleteUser = async (req, res) => {
    try{
        const user = await service.deleteUser(req.params.user);
        return res.status(200).json(user);
    } catch (error) {
        if(error.message === "unauthorized"){
            return res.status(401).send();
        }
        return res.status(403).send();
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await service.updateUser(req.params.user, req.body);
        return res.status(200).json(user);
    } catch (error) {
        if(error.message === "unauthorized"){
            return res.status(401).send();
        }
        return res.status(403).send();
    }
}

export const addRole = async (req, res) => {
    try {
        const user = await service.addRole(req.query.user, req.query.role);
        return res.status(200).json(user);
    }catch (error) {
        if(error.message === "unauthorized"){
            return res.status(401).send();
        }
        return res.status(403).send();
    }
}

export const deleteRole = async (req, res) => {
    try {
        const user = await service.deleteRole(req.query.user, req.query.role);
        return res.status(200).json(user);
    }catch (error) {
        if(error.message === "unauthorized"){
            return res.status(401).send();
        }
        return res.status(403).send();
    }
}

export const changePassword = async (req, res) => {
    try {
        const user = await service.changePassword(req.auth.user, req.body);
        return res.status(204).send();
    } catch (error) {
        return res.status(401).send();
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await service.getUser(req.query.user);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(401).send();
    }
}