import { Request, Response } from "express";

class Controller {
    service: any;
    constructor() {
        this.bindMethods();
    }

    sucessResponse(res: Response, data: String) {
        return res.status(200).send(data);
    }

    errorResponse(res: Response, err: any) {
        return res.status(err.statusCode || 400).send({
            code: err.statusCode,
            message: err.message || err.msg
        });
    }

    async allAcess(req: Request, res: Response) {
        try {
            const data = await this.service.list();
            res.send(data);
        }
        catch (err) {
            return this.errorResponse(res, err);
        }
    }

    async getResourceById(req: Request, res: Response) {
        try {
            const resourceId = req.params.id;
            const data = await this.service.readById(resourceId);
            res.status(200).send(data);
        }
        catch (err) {
            return this.errorResponse(res, err);
        }
    }

    async removeResource(req: Request, res: Response) {
        try {
            const resourceId = req.params.id;
            const data = await this.service.deleteById(resourceId);
            res.send(data);
        }
        catch (err) {
            return this.errorResponse(res, err);
        }
    }

    bindMethods() {
        //Get methods
        const proto = Object.getPrototypeOf(this);
        const methods: (() => any) | string[] = [
            ...Object.getOwnPropertyNames(Controller.prototype),
            ...Object.getOwnPropertyNames(proto)
        ];

        // Bind methods
        for (const method of methods) {
            if (typeof this[method] === 'function') {
                this[method] = this[method].bind(this);
            }
        }
    }

}

export default Controller;
