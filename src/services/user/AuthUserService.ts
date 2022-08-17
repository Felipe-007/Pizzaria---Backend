//Sistema de Login
import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'; //compara se as senhas coincidem
import { sign } from 'jsonwebtoken';

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

    // gera um token JWT e devolve os dados com id, name e email
    const token = sign(
      {
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'  // irá expirar em 30 dias
      }
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    }
  }
}

export { AuthUserService };