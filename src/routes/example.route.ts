import express, { Request, Response } from 'express';

const router = express.Router();

router.route('/')
  .get((_req: Request, res: Response) => {
    res.status(200).json({message: 'hello world'});
  });

export default router;