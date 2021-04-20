import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Locator } from './locator';
import { Build } from './build';

@Entity()
export class LocatorResult {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  testName: string;

  @OneToMany(
    type => Locator,
    locator => locator.locatorResult,
    {
      cascade: true,
    }
  )
  locators: Locator[];

  @ManyToOne(
    type => Build,
    build => build.locatorResults
  )
  build: Build;
}
