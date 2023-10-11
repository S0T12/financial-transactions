import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AccountantEntity } from '../../accountant/entities/accountant.entity';

@Entity()
export class AgencyEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => AccountantEntity, (accountant) => accountant.agencies)
  accountant: AccountantEntity;
}
