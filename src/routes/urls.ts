import * as Express from 'express';
import * as locatorsService from '../service/locators.service';

export const allUrls = async (req: Express.Request, res: Express.Response) => {
    const tests = await locatorsService.getAllLocators()
    
    const urls = tests.map(test => {
        return [...new Set(test.locators.map(l => l.url))]
    })
    
    const result = [...new Set(urls.reduce(function(a, b){
        return a.concat(b);
    }, []))].sort(function(a, b){
        return a.length - b.length;
      });;

    res.json(result);
};