import prismaClient from "../../prisma";

class DetailUserService{
  async execute(user_id: string){

    const user = await prismaClient.user.findFirst({  // pega o id e busca no banco
      where: {
        id: user_id
      },
      select: {  // seleciona as informações que serão apresentadas
        id: true,
        name: true,
        email: true,        
      }
    })

    return user;  //devolve o id com o resultado da busca
  }
}

export { DetailUserService }