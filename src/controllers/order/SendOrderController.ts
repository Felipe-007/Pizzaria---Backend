//enviar ordem
import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderController{
  async handle(req: Request, res: Response){
    const { order_id } = req.body;  //recebe o order_id do req.body

    const sendOrder = new SendOrderService();  // inicializa o serviço

    const order = await sendOrder.execute({ // chama o serviço para ser executado passando o order_id para ela
      order_id
    });

    return res.json(order);
  }
}

export { SendOrderController }