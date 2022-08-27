import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class RemoveOrderService {
  async execute({ order_id }: OrderRequest) {

    const order = await prismaClient.order.delete({
      where: { // irá deletar onde o id for igual a order_id
        id: order_id,
      }
    })

    return order;
  }
}

export { RemoveOrderService }