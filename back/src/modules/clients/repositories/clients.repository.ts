import { CreateClientDto } from "../dtos/clients.dtos"
import { Client } from "../entities/clients.entities"

export abstract class ClientsRepository {
  abstract create(data: CreateClientDto): Promise<Client>
  abstract findAll(): Promise<Client[]>
  abstract findOne(id: string): Promise<Client>
}