import BaseService from "./baseService";
import BookDto from "@Dto/bookDto";
import { Book } from "@entity/Book";

class BookService extends BaseService {
    constructor() {
        super(Book);
    }

    async createBook(payload: BookDto) {
        const book = new Book();
        book.title = payload.title
        book.Author = payload.Author

        return await this.create(book)
    }

    async updateBookById(payload: BookDto): Promise<string> {
        const book: any = await this.findOne(payload.id);
        book.title = payload.title || book.title
        book.Author = payload.Author || book.Author
        return await this.updateById(book)
    }
}

export default BookService;