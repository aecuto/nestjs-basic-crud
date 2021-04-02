import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  UpdateDate: Date;
}
