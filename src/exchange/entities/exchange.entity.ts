import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExchangeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  currency: string;

  @Column({ type: 'integer' })
  conversionPrice: number;
}
