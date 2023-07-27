import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dtos/clients.dtos';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) { }

  @Post()
  create(@Body() data: CreateClientDto) {
    return this.clientsService.create(data)
  }

  @Get()
  findAll() {
    return this.clientsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(id)
  }
}
