import UserController from "../controller/user.controller";
import { Router } from "express";

const router = Router();

const controller = new UserController;

router.post('/users', controller.createUser);

router.get('/users', controller.getUsers);

router.get('/users/:id', controller.getUserByID);

router.put('/users/:id', controller.updateUser);

router.delete('/user/:id', controller.deleteUser);

export default router;