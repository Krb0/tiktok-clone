import { Controller, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}
  @Get()
  mainController() {
    return this.UsersService.getAllUsers();
  }
  @Post()
  async createUser() {
    return await this.UsersService.createUser();
  }
  @Put()
  async updateUser() {
    return await this.UsersService.updateUser();
  }
}
