import { Request, Response, NextFunction } from "express";
export interface AuthenticatedRequest extends Request {
    userId?: string;
}
export declare const verifyToken: (req: AuthenticatedRequest, res: Response, next: NextFunction) => void;
//# sourceMappingURL=verifyToken.d.ts.map