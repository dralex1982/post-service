import {Router} from "express";

import * as controller from '../controllers/user.controller.js';
import validate from "../middlewares/validation.middleware.js";

const router = Router();

router.post('/register', validate('register'),controller.register);
router.post('/login', controller.login);
router.delete('/user/:user', controller.deleteUser);
router.patch('/user/:user', validate('updateUser'),controller.updateUser);
router.patch('/user/:user/role/:role', validate('changeRoles', 'params'), controller.addRole);
router.delete('/user/:user/role/:role', validate('changeRoles', 'params'), controller.deleteRole);
router.patch('/password', controller.changePassword);
router.get('/user/:user', controller.getUser);

export default router;