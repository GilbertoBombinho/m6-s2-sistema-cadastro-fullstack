import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateClientDto } from "./dtos/clients.dtos"

@Injectable()
export class ClientsService {
  constructor(private clientsRepository: ClientsService) { }
  async create(data: CreateClientDto) {
    return await this.clientsRepository.create(data)
  }

  async findAll() {
    return this.clientsRepository.findAll()
  }

  async findOne(id: string) {
    const client = await this.clientsRepository.findOne(id)
    if(!client){
      throw new NotFoundException('Client not found')
    }
    return client
  }
}