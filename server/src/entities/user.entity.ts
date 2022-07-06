import { Exclude } from 'class-transformer';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;
  @Column({ unique: true })
  email!: string;

  @Column({ nullable: true })
  refreshtoken?: string;

  @Column()
  @Exclude()
  password!: string;
}
