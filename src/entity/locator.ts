import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { LocatorResult } from './locator.result';

@Entity()
export class Locator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column({nullable: true})
  subject: string;

  @Column()
  locator: string;

  @Column({ nullable: true })
  parentUuid: string;

  @ManyToOne(
    type => LocatorResult,
    locatorResult => locatorResult.locators
  )
  locatorResult: LocatorResult;
}
