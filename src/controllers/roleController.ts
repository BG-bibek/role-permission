import Controller from "./baseController";
import serviceProvider from '../provider/service-provider';
import { Request, Response } from "express";
class RoleController extends Controller {
    constructor() {
        super();
        this.service = serviceProvider.RoleService;
    }

    async createRole(req: Request, res: Response) {
        try {
            const payload = {
                name: req.body.name,
                slug: req.body.slug,
                permission: req.body.permission
            }
            const data = await this.service.createRole(payload);
            res.status(200).send(data);
        } catch (err) {
            return this.errorResponse(res, err);
        }

    }
    async put(req: Request, res: Response) {
        try {
            const paylaod = {
                id: req.params.id,
                name: req.body.name,
                slug: req.body.slug,
                permission: req.body.permission
            }
            const data = await this.service.updateRoleById(paylaod);
            res.send(data);
        }
        catch (err) {
            return this.errorResponse(res, err);
        }
    }
}



export default new RoleController;