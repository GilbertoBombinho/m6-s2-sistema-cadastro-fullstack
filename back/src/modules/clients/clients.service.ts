import { Injectable } from "@nestjs/common"

@Injectable()
export class ClientsService{
  
  create(data:any){
    return "cliente criado"
  }

  findAll(){
    return "clientes encontrados"
  }

  findOne(id:string){
    return "cliente encontrado"
  }
}