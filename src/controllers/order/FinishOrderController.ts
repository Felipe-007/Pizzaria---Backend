// irá finalizar o pedido, mudando o status para true
import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";

class FinishOrderController{
  async handle(req: Request, res: Response){
    const { order_id } = req.body;  //recebe o order_id do req.body

    const finishOrderService = new FinishOrderService();

    const order = await finishOrderService.execute({ // chama o serviço para ser executado passando o order_id para ela
      order_id
    });

    return res.json(order);
  }
}

export { FinishOrderController }