// irá finalizar o pedido, mudando o status para true
import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class FinishOrderService{
  async execute({ order_id }: OrderRequest){
    const order = await prismaClient.order.update({
      where: {
        id: order_id  //compara se o id é igual ao order_id
      },
      data:{
        status: true  // muda o status de falso para verdadeiro
      }
    })

    return order;
  }
}

export { FinishOrderService }