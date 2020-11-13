import { Middleware, RequestHandler, ResponseHandler, ServerConfigInterface } from './types';
declare const configurePath: (urlPath: string, middlewareCb: Middleware[], method: 'get' | 'post' | 'put' | 'delete', routeTable: ServerConfigInterface['routeTable']) => void;
declare type CallbackMiddleware = (req: RequestHandler, res: ResponseHandler, callback: () => void) => void;
/**
 * Function helps to call middleware callbacks passed to application path
 * ex:
 *
 * app.get('/', () => {})
 * @param middlewares
 * @param req
 * @param res
 * @returns {Promise} Promise<boolean[] | Middleware[] | unknown[]>
 * @public
 */
declare const processMiddleware: (middlewares: CallbackMiddleware[], req: RequestHandler, res: ResponseHandler) => Promise<boolean[] | CallbackMiddleware[] | unknown[]>;
/**
 * Reads request data and combines chunks into human format
 * @param req
 * @returns request data
 * @throws {Error} on error
 */
declare const readBody: (req: RequestHandler) => Promise<string>;
export { configurePath, processMiddleware, readBody };
