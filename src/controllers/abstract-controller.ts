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
  findById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const result = await this.service.findById(id);
    res.status(200).json(result);
  }
  insert = async (req: Request, res: Response, _next: NextFunction) => {
    const engines = req.body;
    const result = await this.service.insert(engines);
    res.status(201).json(result);
  }
  deleteById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const result = await this.service.deleteById(id);
    res.status(200).json(result);
  }
  updateById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const engine = req.body;
    const result = await this.service.updateById(id, engine);
    res.status(200).json(result);
  }
}

export default abstractController;