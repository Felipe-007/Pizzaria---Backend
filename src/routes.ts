import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import isAuthenticated from "./controllers/middlewares/isAuthenticated";

const router = Router();

// ROTAS controllers/USER
router.post('/users', new CreateUserController().handle)  // passo 1 = chama o CreateUserController

//Login
router.post('/session', new AuthUserController().handle)

//Dados do user
router.get('/me', isAuthenticated, new DetailUserController().handle) //ira executar o middlewar isAuthenticated antes de executar o DetailUserController

export { router };