import BaseService from "./baseService";
import { User } from "@entity/User";
import UserDto from "@Dto/userDto";

class UserService extends BaseService {
    constructor() {
        super(User);
    }
    //to create resource
    async createUser(payload: UserDto) {
        const user = new User();
        user.firstName = payload.firstName
        user.lastName = payload.lastName
        user.age = payload.age
        return await this.create(user)

    }

    //to update resource
    async updateUserById(payload: UserDto): Promise<string> {
        const user: any = await this.findOne(payload.id);
        user.firstName = payload.firstName || user.firstName
        user.lastName = payload.lastName || user.lastName
        user.age = payload.age || user.age
        return await this.updateById(user)
    }
}

export default UserService;