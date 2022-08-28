//enviar ordem
import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class SendOrderService{
  async execute({ order_id }: OrderRequest) {
    const order = await prismaClient.order.update({
      where: {
        id: order_id  //compara se o id é igual ao order_id
      },
      data:{
        draft: false  // muda o draft de verdadeiro para falso
      }
    })

    return order;
  }
}

export { SendOrderService }