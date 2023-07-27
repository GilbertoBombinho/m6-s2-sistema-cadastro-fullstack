import { Module } from '@nestjs/common';
import { ClientsModule } from './modules/clients/clients.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ClientsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
