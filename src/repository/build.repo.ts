import { Build } from '../entity/build';
import { getManager } from 'typeorm';

const buildRepository = () => getManager().getRepository(Build);

export const save = async (body: any) => {
  return await buildRepository().save(body);
};

export const findAll = async () => {
  return await buildRepository().find();
};

export const findByParams = async (params: object) => {
  return await buildRepository().findOne(params, {
    relations: ['locatorResults', 'locatorResults.locators'],
  });
};

export const deleteBuilds = async (builds: Build[]) => {
  return await buildRepository().remove(builds);
};
