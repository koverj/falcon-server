import * as buildRepository from '../repository/build.repo';

export const saveBuild = async (body: any) => {
  return await buildRepository.save(body);
};

export const getAllBuilds = async () => {
  return await buildRepository.findAll();
};

export const getBuildByParams = async (params: object) => {
  return await buildRepository.findByParams(params);
};
