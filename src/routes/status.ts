import * as Express from 'express';

export const status = (req: Express.Request, res: Express.Response) => {
    res.json({ status: 'Listening...' });
};