
import express, { Request, Response, Express, NextFunction } from "express";
import next from "next";
import path from "path";
// eslint-disable-next-line node/no-deprecated-api
import { parse } from "url";


const rootPath = path.resolve(process.cwd(), "..");
const nextApps = {
    "/guest": path.resolve(rootPath, "hotel-guest"),
    "/host": path.resolve(rootPath, "hotel-host"),
};


const app: Express = express();

(async () => {
    try {
        for (const [subPath, location] of Object.entries(nextApps)) {
            const nextApp = next({
                dir: location,
                customServer: true,
                isNextDevCommand: false,
                dev: process.env.NODE_ENV !== "production",
            });
        
            await nextApp.prepare();
            const nextRoutesHandler = nextApp.getRequestHandler();

            app.get(`${subPath}*`, async (req: Request, res: Response) => {
                const parsedUrl = parse(`${req.protocol}://${req.hostname}${req.url}`, true);
                await nextRoutesHandler(req, res, parsedUrl);
            });
        }
    } catch(e: any) {
        console.error(e);
        throw e;
    }
    
    app.listen(3000, () =>
        console.log(`\n\n🚀 Server ready at: http://localhost:3000\n`),
    );
})();
