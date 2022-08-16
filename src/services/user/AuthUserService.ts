//Sistema de Login
import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'; //compara se as senhas coincidem

interface AuthRequest{
  email: string;
  password: string;
}

class AuthUserService{
  async execute({ email, password }: AuthRequest){
    //Verificar se esse email já esta cadastrado na plataforma
    const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    if(!user){
      throw new Error("User/password incorrect")
    }

    //verifica se a senha digitada é a correta
    const passwordMatch = await compare(password, user.password)  //compara se as senhas coincidem
    
    if(!passwordMatch){
      throw new Error("User/password incorrect")
    }

    return { ok: true }
  }
}

export { AuthUserService };