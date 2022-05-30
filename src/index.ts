import 'dotenv/config';
import 'module-alias/register';
import * as express from 'express';
import loaders from './loaders';
import { AppDataSource } from "./data-source"

const app = express();
const port = process.env.PORT;

let startServer = async () => {
    const app = express();
    await loaders.init(app);

    app.listen(process.env.PORT, (err?: any) => {
        if (err) console.log(err);
        console.log(`App runnning at port ${process.env.PORT}`);
    });
}

AppDataSource.initialize().then(async () => {
    console.log("Database connnected successfully!")
}).catch(error => console.log(error))

startServer();