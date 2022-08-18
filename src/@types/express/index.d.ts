// irá criar a tipagem, que irá sobrescrever a do typescript
// ira adicionar o request o user_id
// em tsconfig.json descomentar a linha "typeRoots": ["./src/@types"],
declare namespace Express{
  export interface Request{
    user_id: string;
  }
}