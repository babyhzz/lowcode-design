import { BaseEntity } from '@/common/base.entity';
import { Permission } from '@/permission/entities/permission.entity';
import { User } from '@/user/entities/user.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Role extends BaseEntity {
  @Column()
  roleCode: string;

  @Column()
  roleName: string;

  @Column()
  description: string;

  @ManyToMany(() => Permission)
  @JoinTable()
  permissions: Permission[];
}
