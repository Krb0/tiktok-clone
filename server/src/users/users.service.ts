import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private users: Repository<User>,
  ) {}
  getAllUsers() {
    return this.users.count();
  }
  async createUser() {
    const userCount = await this.users.count();
    const user = this.users.create({
      email: `test${userCount}@gmail.com`,
      password: '152356',
    });
    await this.users.save(user);
    return user;
  }
  async updateUser() {
    return 'User Updated';
  }
}
