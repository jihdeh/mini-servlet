/**
 * Expose `Server()`.
 */
declare function Server(): {
    Servlets: any;
    Server: (req: any, res: any) => Promise<void> | undefined;
};
declare const _default: typeof Server;
export = _default;
