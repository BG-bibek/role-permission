import Controller from "./baseController";
import serviceProvider from '../provider/service-provider';
import { Request, Response } from "express";

class BookController extends Controller {
    constructor() {
        super();
        this.service = serviceProvider.BookService;
    }

    async createBook(req: Request, res: Response) {
        try {
            const payload = {
                title: req.body.title,
                Author: req.body.Author,
            }
            const data = await this.service.createBook(payload);
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
                title: req.body.title,
                Author: req.body.Author,
            }
            const data = await this.service.updateBookById(paylaod);
            res.send(data);
        }
        catch (err) {
            return this.errorResponse(res, err);
        }
    }

}

export default new BookController();
