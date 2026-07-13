import {Router} from "express";

import * as controller from '../controller/userController.js';
import validate from "../middlewares/validation.middleware.js";

const router = Router();

router.post('/register', validate('register'),controller.addUser);
router.post('/login', controller.login);
router.delete('/user/:user', controller.deleteUser);
router.patch('/user/:user', validate('updateUser'),controller.updateUser);
router.patch('/user/:user/role/:role', validate('changeRole', 'params'), controller.addRole);
router.delete('/user/:user/role/:role', validate('changeRole', 'params'), controller.deleteRole);
router.patch('/password', controller.changePassword);
router.get('/user/:user', controller.getUser);