import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AuditorEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;
}
