import { Request, Response, NextFunction } from 'express';
import abstractService from '../services/abstract-service';

class abstractController<T> {
  private service: abstractService<T>;
  constructor(service: abstractService<T>) {
    this.service = service;
  }
  findAll = async (_req: Request, res: Response, _next: NextFunction) => {
    const result = await this.service.findAll();
    res.status(200).json(result);
  }
}

export default abstractController;