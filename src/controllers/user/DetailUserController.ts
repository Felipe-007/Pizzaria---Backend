import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController{
  async handle(req: Request, res: Response){

    const user_id = req.user_id;  //pega o id do usuario

    const detailUserService = new DetailUserService();  //chamou o serviço

    const user = await detailUserService.execute(user_id);  //passou para o serviço o id do usuário

    return res.json(user);
  }
}

export { DetailUserController }