import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());

app.use(router);

app.listen(3333, () => {
  console.log('🚀 Back-end Inicializado!');
  console.log('Executando no link: http://localhost:3333');
});