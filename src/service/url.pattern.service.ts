import { UrlPattern } from '../entity/url.pattern';
import * as urlPatternrepo from '../repository/url.pattern.repo';

export const saveUrlPattern = async (pattern: UrlPattern) => {
  await urlPatternrepo.save(pattern);
};

export const getUrlPatterns = async () => {
  return await urlPatternrepo.findAll();
};
