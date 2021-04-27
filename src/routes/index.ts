import * as Express from 'express';

import { status } from '../routes/status';
import { saveLocators, getLocators } from '../routes/locators';
import { getAllBuilds } from '../routes/builds';
import { allUrls } from '../routes/urls'
import { saveUrlPattern } from '../routes/url_patterns'

export const initRoutes = (app: Express.Application) => {
	app.get('/status', status);
	app.post('/locators', saveLocators);
	app.get('/locators', getLocators);
	app.get('/builds', getAllBuilds);
	app.get('/urls', allUrls);
	app.post('/patterns', saveUrlPattern);
};
