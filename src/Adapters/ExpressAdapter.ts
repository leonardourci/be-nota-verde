import { NextFunction, Request, Response } from 'express'

export class ExpressAdapter {
  static perform =
    (fn: CallableFunction) =>
    async (req: Request, res: Response, next: NextFunction): Promise<Response<any> | void> => {
      try {
        return res.status(200).json(await fn({ ...req.query, ...req.body, ...req.params }))
      } catch (err) {
        next(err)
      }
    }
}
