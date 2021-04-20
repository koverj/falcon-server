import { getManager } from 'typeorm';
import { LocatorResult } from '../entity/locator.result';

const locatorRepository = () => getManager().getRepository(LocatorResult);

export const save = (locator: any) => {
  return locatorRepository().save(locator);
};

export const getAllLocatorsForBuildByUrl = (url: string, buildId: string) => {
  return locatorRepository()
    .createQueryBuilder('locator_result')
    .leftJoinAndSelect('locator_result.locators', 'locator')
    .where('locator.url like :url', { url })
    .leftJoinAndSelect('locator_result.build', 'build')
    .andWhere('build.id = :id', { id: buildId })
    .getMany();
};

export const getAllLocatorsForBuild = (buildId: string) => {
  return locatorRepository()
    .createQueryBuilder('locator_result')
    .leftJoinAndSelect('locator_result.locators', 'locator')
    .orderBy('locator.id', 'ASC')
    .leftJoinAndSelect('locator_result.build', 'build')
    .andWhere('build.id = :id', { id: buildId })
    .getMany();
};

export const getAllLocators = () => {
  return locatorRepository()
    .createQueryBuilder('locator_result')
    .leftJoinAndSelect('locator_result.locators', 'locator')
    .orderBy('locator.id', 'ASC')
    .leftJoinAndSelect('locator_result.build', 'build')
    .getMany();
};
