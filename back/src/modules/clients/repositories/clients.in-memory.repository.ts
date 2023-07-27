import { CreateClientDto } from "../dtos/clients.dtos";
import { Client } from "../entities/clients.entities";
import { ClientsRepository } from "./clients.repository";

export class ClientsInMemoryRepository implements ClientsRepository {

  private database: Client[] = []

  async create(data: CreateClientDto): Promise<Client> {
    const newClient = new Client()
    Object.assign(newClient, {
      ...data
    })
    this.database.push(newClient)
    return newClient
  }
  async findAll(): Promise<Client[]> {
    return this.database
  }
  async findOne(id: string): Promise<Client> {
    const client = this.database.find(client => client.id == id)
    return client
  }

}