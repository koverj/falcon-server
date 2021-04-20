import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { LocatorResult } from './locator.result';

@Entity()
export class Build {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    type => LocatorResult,
    locator => locator.build,
    {
      cascade: true,
    }
  )
  locatorResults: LocatorResult[];
}
