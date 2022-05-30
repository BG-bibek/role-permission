import serviceProvider from "../provider/service-provider";
import Controller from './baseController';
import { Request, Response } from 'express';
class userRoleController extends Controller {

    constructor() {
        super();
        this.service = serviceProvider.UserRoleService;
    }

    async createUserRole(req: Request, res: Response) {
        try {
            const payload = {
                userId: req.body.userId,
                roleId: req.body.roleId
            }

            const data = await this.service.createUserRole(payload);
            return this.sucessResponse(res, data);
        }
        catch (err) {
            return this.errorResponse(res, err);
        }
    }
}

export default new userRoleController();