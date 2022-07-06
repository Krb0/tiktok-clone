import { TypeOrmModule } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { User } from '../src/entities/user.entity';
dotenv.config();
const database = TypeOrmModule.forRoot({
  type: 'mongodb',
  url: process.env.MONGODB_CONNECTION_URL,
  entities: [User],
  synchronize: true,
  useNewUrlParser: true,
  logging: true,
});

export default database;
