import { Module } from "@nestjs/common";
import { ClientsController } from "./clients.controller";
import { ClientsService } from "./clients.service";
import { ClientsRepository } from "../clients/repositories/clients.repository"
import { ClientsInMemoryRepository } from "./repositories/clients.in-memory.repository";

@Module({
  controllers: [ClientsController],
  providers: [
    ClientsService,
    {
      provide: ClientsRepository,
      useClass: ClientsInMemoryRepository
    }]
})
export class ClientsModule { }