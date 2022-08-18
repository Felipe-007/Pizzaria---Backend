//lista e apresenta as categorias
import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
  async handle(req: Request, res: Response){

    const listCategoryService = new ListCategoryService();  // inicializa o serviço

    const category = await listCategoryService.execute();
    
    return res.json(category);
  }
}

export { ListCategoryController }