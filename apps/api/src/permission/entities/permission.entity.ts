import { BaseEntity } from '@/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Permission extends BaseEntity {
  @Column()
  parentId: string;

  @Column()
  menuType: string;

  @Column()
  url: string;

  @Column()
  redirect: string;

  @Column()
  icon: string;
}
