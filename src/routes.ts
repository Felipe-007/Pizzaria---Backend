import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

// ROTAS controllers/USER
router.post('/users', new CreateUserController().handle)  // passo 1 = chama o CreateUserController

//Login
router.post('/session', new AuthUserController().handle)
export { router };