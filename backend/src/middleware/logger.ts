import { NextFunction, Request, Response } from 'express';

const logger = (req: Request, res: Response, next: NextFunction): void => {
    console.log(`${req.method}\t${req.path}`);
    next();
}

module.exports = logger;