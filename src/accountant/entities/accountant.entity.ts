import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AgencyEntity } from '../../agency/entities/agency.entity';

@Entity()
export class AccountantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(() => AgencyEntity, (agency) => agency.accountant)
  agencies: AgencyEntity[];
}
