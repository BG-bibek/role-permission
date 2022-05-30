import CustomError from "../errors/customError";
import { User } from "../entity/User";
import { Role } from "../entity/Roles";
import { AppDataSource } from "../data-source";
import UserDto from "@Dto/userDto";
import { CRUD } from "../common/interfaces/crud.interface";
const RoleModel = AppDataSource.getRepository(Role);
class BaseService implements CRUD {
    model;
    repository;
    constructor(model: any) {
        // this.repository = AppDataSource.getRepository<User>(model);
        this.model = model;
        this.repository = AppDataSource.getRepository(this.model);
    }
    customError(code: Number, msg: String) {
        throw new CustomError({ statusCode: code, msg: msg });
    }

    //need to make it reusable.
    async create(paylaod: any) {
        await this.repository.save(paylaod);
        return "Resources added successfully!";
    }

    async readById(resourceId: number) {
        return await this.repository.findBy({ id: resourceId });
    }

    async list() {
        const data = await this.repository.find();
        return data;
    }

    async deleteById(resourceId: string) {
        const userToRemove = await this.repository.findOneBy({ id: resourceId });
        if (!userToRemove) return this.customError(404, "Resource not found")
        await this.repository.remove(userToRemove);
        return "Resources Deleted Successfully";
    };

    //Ask someone to review this method 
    async findOne(id: number | undefined) {
        const data = await this.repository.findOneBy({ id });
        if (!data) return this.customError(404, "Resource not found")
        return data;
    }

    async updateById(resource: any) {
        await this.repository.save(resource);
        return "Resources Updated Successfully";
    }

}

export default BaseService;