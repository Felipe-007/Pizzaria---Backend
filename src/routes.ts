import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import isAuthenticated from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from './config/multer';
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));  //salvará as imagens em tmp

//-- ROTAS controllers/USER
router.post('/users', new CreateUserController().handle)  // passo 1 = chama o CreateUserController

//Login
router.post('/session', new AuthUserController().handle)

//Dados do user
router.get('/me', isAuthenticated, new DetailUserController().handle) //ira executar o middlewar isAuthenticated antes de executar o DetailUserController


//-- ROTAS CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle) //isAuthenticated somente pessoas autenticadas poderão acessar
router.get('/category', isAuthenticated, new ListCategoryController().handle)


//-- ROTAS PRODUCT
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)  //upload.single('file') = middlewar que cuidará do envio da foto
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)


//-- ROTAS ORDENS
router.post('/order', isAuthenticated, new CreateOrderController().handle)  // abrir mesa
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)  //exclui as ordens com o numero da mesa
router.post('/order/add', isAuthenticated, new AddItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)  //exclui os itens da mesa
router.put('/order/send', isAuthenticated, new SendOrderController().handle)  //enviar ordem
router.get('/orders', isAuthenticated, new ListOrderController().handle)  //lista as ordens, listando somente as false pois não estão mais em rascunho



export { router };