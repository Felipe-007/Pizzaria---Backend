import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

// ROTAS controllers/USER
router.post('/users', new CreateUserController().handle)  // passo 1 = chama o CreateUserController

export { router };