import * as buildService from '../service/build.service';
import * as Express from 'express';

export const createBuild = async (req: Express.Request, res: Express.Response) => {
    res.json(await buildService.saveBuild(req.body));
  };
  
  export const getAllBuilds = async (req: Express.Request, res: Express.Response) => {
    res.json(await buildService.getAllBuilds());
  };
  
  export const getBuildByParams = async (req: Express.Request, res: Express.Response) => {
    res.json(await buildService.getBuildByParams(req.query));
  };

  export const deleteBuild = async (req: Express.Request, res: Express.Response) => {
    const ids = req.body
    await buildService.deleteBuilds(ids)
    res.json({});
  }