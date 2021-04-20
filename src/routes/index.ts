import * as Express from 'express';

import { status } from 'routes/status';
import { saveLocators, getLocators } from 'routes/locators';
import { getAllBuilds } from 'routes/builds';

export const initRoutes = (app: Express.Application) => {
	app.get('/status', status);
	app.post('/locators', saveLocators);
	app.get('/locators', getLocators);
	app.get('/builds', getAllBuilds);
};
