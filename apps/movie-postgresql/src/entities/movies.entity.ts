import { Column, Entity } from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity({ name: 'item' })
export class Movies extends BaseEntity {
  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;
}
