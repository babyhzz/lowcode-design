import { BaseEntity } from '@/common/base.entity';
import { Role } from '@/role/entities/role.entity';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  realname: string;

  @Column()
  phone: string;

  @Column()
  idcard: string;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
