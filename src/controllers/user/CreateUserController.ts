import { Request, response, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;  // passo 2 = pega os passos do body

    const createUserService = new CreateUserService();  // inicializa o serviço

    const user = await createUserService.execute({
      name,
      email,
      password
    });  // executa o serviço

    return res.json(user)  // retorna os dados para o controler
  }
}

export { CreateUserController }