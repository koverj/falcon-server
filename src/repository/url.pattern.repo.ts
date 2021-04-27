import { UrlPattern } from '../entity/url.pattern';
import { getManager } from 'typeorm';

const urlPatternRepository = () => getManager().getRepository(UrlPattern);

export const save = async (pattern: any) => {
  return urlPatternRepository().save(pattern);
};

export const findAll = async () => {
  return urlPatternRepository().find();
};
