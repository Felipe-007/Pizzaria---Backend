//exclui as ordens com o numero da mesa
import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

class RemoveOrderController{
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;  //pega order_id que será do tipo string 

    const removeOrder = new RemoveOrderService();  // inicializa o serviço

    const order = await removeOrder.execute({
      order_id
    });

    return res.json(order);
  }
}

export { RemoveOrderController }