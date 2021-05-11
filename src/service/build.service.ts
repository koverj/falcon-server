import { Build } from 'entity/build';
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

export const  deleteBuilds = async (ids: string[]) => {
  const builds: Build[] = [] 
  for (const id of ids){
    const build = await getBuildByParams({name: id})
    if(build){
      builds.push(build)
    }
  }

  await buildRepository.deleteBuilds(builds)
}
