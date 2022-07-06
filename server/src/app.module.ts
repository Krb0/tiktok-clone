import { Module } from '@nestjs/common';
import database from 'config/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [database, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
