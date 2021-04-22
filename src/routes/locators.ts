import * as buildService from '../service/build.service';
import * as locatorsService from '../service/locators.service';
import * as urlService from '../service/url.pattern.service';
import * as Express from 'express';
import { isXpath, processLocator, addUniqueToArray, matchUrl } from '../utils';
import { v4 as uuidv4 } from 'uuid';

export const saveLocators = async (req: Express.Request, res: Express.Response) => {  
    
    const buildId = req.body.buildId || uuidv4();
    const build = await buildService.getBuildByParams({ name: buildId });
    
    const tests = req.body.tests
    const locatorResults = tests.map(t => {
         return { testName: t.testName, locators: t.locators}
    })

    const buildData = {
      name: buildId,
      locatorResults
    }

    if (!build) {
      await buildService.saveBuild(buildData)
    } else {
      build.locatorResults.push(locatorResults);
      await buildService.saveBuild(build);
    }

    res.json({ status: 'saved' });
  };


  export const getLocators = async (req: Express.Request, res: Express.Response) => {
    let url = req.query.url as string;
    const buildId = req.query.buildId as string;
    const useUrlTemplate = req.query.urlTemplate ? true : false;
  
    if (useUrlTemplate) {
      const patterns = await urlService.getUrlPatterns();
      url = matchUrl(url, patterns);
    }
  
    const data: any = {};
  
    let tests = await locatorsService.getAllLocatorsForBuildByUrl(url, buildId);

    if(!url) {
      tests = await locatorsService.getAllLocatorsForBuild(buildId);
    }

    if(!url && !buildId){
       const locators =  await locatorsService.getAllLocators();
       res.json(locators);
    }

    tests.forEach((test: any) => {
      test.locators.forEach((l: any) => {
        const result = data[l.locator];
  
        if (!result) {
          const locatorType = isXpath(l.locator) ? 'xpath' : 'css';
  
          const locator = processLocator(l.locator);
  
          data[locator] = {
            type: locatorType,
            id: uuidv4(),
            tests: [test.testName],
            urls: [l.url],
          };
        } else {
          data[l.locator].tests = addUniqueToArray(
            data[l.locator].tests,
            test.testName
          );
          data[l.locator].urls = addUniqueToArray(data[l.locator].urls, l.url);
        }
      });
    });
  
    res.json(data);
  };