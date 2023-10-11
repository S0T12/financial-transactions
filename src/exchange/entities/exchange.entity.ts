import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ExchangeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  currency: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  conversionRate: number;

  @CreateDateColumn()
  createdAt: Date;
}
