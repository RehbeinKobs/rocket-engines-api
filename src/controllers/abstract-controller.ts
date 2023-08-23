import { Request, Response, NextFunction } from 'express';
import AbstractService from '../services/abstract-service';

abstract class AbstractController<T> {
  protected service;
  constructor(service: AbstractService<T>) {
    this.service = service;
  }
  findAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.findAll();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.service.findById(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
  findByField = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { params } = req;
      const result = await this.service.findByField(params as { field: string, value: string });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
  insert = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const engines = req.body;
      const result = await this.service.insert(engines);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };
  deleteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.service.deleteById(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
  updateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const engine = req.body;
      const result = await this.service.updateById(id, engine);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}

export default AbstractController;