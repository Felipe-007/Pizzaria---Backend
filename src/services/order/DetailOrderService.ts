//acessa os detalhes da ordem já enviada, com status draft:false
import prismaClient from "../../prisma";

interface DetailRequest {
  order_id: string;
}

class DetailOrderService {
  async execute({ order_id }: DetailRequest) {

    const orders = await prismaClient.item.findMany({
      where: { //onde order_id for igual a order_id
        order_id: order_id
      },
      include: {  //incluindo no resultado os campos product e order
        product: true,
        order: true,
      }
    })

    return orders;
  }
}

export { DetailOrderService }