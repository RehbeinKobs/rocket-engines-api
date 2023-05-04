import { Request, Response, NextFunction } from "express";
import StatusError from "../classes/status-error";

function errorHandler(error: StatusError, _req: Request, res: Response, _next: NextFunction) {
    const { status, message } = error;
    res.status(status || 500).json({ message });
}

export default errorHandler;