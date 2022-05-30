import Controller from './baseController';
import serviceProvider from '../provider/service-provider';
import { Request, Response } from "express";
class UserController extends Controller {

    constructor() {
        super();
        this.service = serviceProvider.UserService;
    }

    async createUser(req: Request, res: Response) {
        try {
            const payload = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age,
                role: req.body.roleId
            }
            const data = await this.service.createUser(payload);
            res.status(200).send(data);
        }
        catch (err) {
            return this.errorResponse(res, err);
        }
    }


    async put(req: Request, res: Response) {
        try {
            const paylaod = {
                id: req.params.id,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age
            }
            const data = await this.service.updateUserById(paylaod);
            res.send(data);
        }
        catch (err) {
            return this.errorResponse(res, err);
        }
    }

}

export default new UserController();