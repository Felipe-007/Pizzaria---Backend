import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors';
import { router } from "./routes";
import cors from 'cors';  //habita a qualquer IP a fazer requisição
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use(
  './files',
  express.static(path.resolve(__dirname, '..', 'tmp'))  //cria uma rota estatica, afim de enviar o nome da foto para o frontend
);

//Tratando as mensagens de Erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    //Se for uma instância do tipo error
    return res.status(400).json({
      error: err.message
    })
  }
})

app.listen(3333, () => {
  console.log('🚀 Back-end Inicializado!');
  console.log('Executando no link: http://localhost:3333');
});