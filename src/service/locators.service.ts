import * as locatorRepository from '../repository/locator.repo';

export const saveLocator = async (locator: any) => {
  await locatorRepository.save(locator);
};

export const getAllLocatorsForBuildByUrl = async (
  url: string,
  buildId: string
) => {
  return await locatorRepository.getAllLocatorsForBuildByUrl(url, buildId);
};

export const getAllLocatorsForBuild = async (buildId: string) => {
  return await locatorRepository.getAllLocatorsForBuild(buildId);
};

export const getAllLocators = async () => {
  return await locatorRepository.getAllLocators();
};
