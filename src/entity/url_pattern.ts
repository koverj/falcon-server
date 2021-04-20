import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UrlPattern {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  path: string;
}
