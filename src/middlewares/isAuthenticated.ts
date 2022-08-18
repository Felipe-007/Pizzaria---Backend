//ira executar o middlewar isAuthenticated antes de executar o DetailUserController, afim de verificar se o token digitado esta de acordo
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
  sub: string;
}

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
){
  // Receber o token
  const authToken = req.headers.authorization;

  if(!authToken){  //caso não seja autorizado será apresentado o erro 401
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ")

  try{
    //Validar esse token
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
    ) as Payload;

    //Recuperar o id do token e colocar dentro de uma variável user_id dentro do req.
    req.user_id = sub;

    return next();

  }catch(err){
    return res.status(401).end();
  }
}