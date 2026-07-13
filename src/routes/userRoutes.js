import {Router} from "express";

import * as controller from '../controller/userController.js';

const router = Router();

router.post('/account/register', controller.addUser);
router.post('/account/login', controller.login);
router.delete('/account/user/:user', controller.deleteUser);
router.patch('/account/user/:user', controller.updateUser);
router.patch('/account/user/:user/role/:role', controller.addRole);
router.delete('/account/user/:user/role/:role', controller.deleteRole);
router.patch('/account/password', controller.changePassword);
router.get('/account/user/:user', controller.getUser);