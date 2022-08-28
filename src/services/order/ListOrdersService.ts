//lista as ordens, listando somente as false pois não estão mais em rascunho
import prismaClient from "../../prisma";

class ListOrdersService{
  async execute(){
    const orders = await prismaClient.order.findMany({  //busca no banco
      where:{  // onde o draft e o status forem false
        draft: false,
        status: false,
      },
      orderBy:{  //irá ordenar por ordem decrecente
        create_at: 'desc'
      }
    })

    return orders;
  }
}

export { ListOrdersService }