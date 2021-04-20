import { UrlPattern } from '../entity/url_pattern';
import { getManager } from 'typeorm';

const urlPatternRepository = () => getManager().getRepository(UrlPattern);

export const save = async (pattern: any) => {
  return await urlPatternRepository().save(pattern);
};

export const findAll = async () => {
  return await urlPatternRepository().find();
};
