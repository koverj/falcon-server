import * as urlPatternService from "../service/url.pattern.service";
import * as Express from "express";

export const saveUrlPattern = async (
  req: Express.Request,
  res: Express.Response
) => {
  const body = req.body;
  await urlPatternService.saveUrlPattern(body);
  res.json({ status: "saved" }); ;
};
