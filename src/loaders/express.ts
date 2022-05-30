import indexRouter from "../routes/index";
import userRouter from "../routes/user";
import roleRouter from "../routes/role";
import userRoleRouter from "../routes/userRole";
import bookRouter from "../routes/book";
import * as cors from "cors";
import * as express from "express";
import helmet from "helmet";
let expressLoader = {
    init(app: any) {
    }
}

var corsOptions = {
    origin: "http://localhost:8081"
};

expressLoader.init = async (app) => {
    app.use(helmet());
    app.use(cors(corsOptions))
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/", indexRouter);
    app.use('/user', userRouter);
    app.use('/role', roleRouter);
    app.use('/userRole', userRoleRouter);
    app.use('/book', bookRouter);
}

export default expressLoader;