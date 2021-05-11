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
    { onDelete: 'CASCADE' }
  )
  locators: Locator[];

  @ManyToOne(
    type => Build,
    build => build.locatorResults,
    { onDelete: 'CASCADE' }
  )
  build: Build;
}
