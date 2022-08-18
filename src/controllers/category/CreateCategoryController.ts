import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";


class CreateCategoryController{
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createCategoryService = new CreateCategoryService();  // inicializa o serviço

    const category = await createCategoryService.execute({
      name
    });  // executa o serviço

    return res.json(category);
  }
}

export { CreateCategoryController }