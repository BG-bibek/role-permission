import BaseService from "./baseService";
import RoleDto from "@Dto/roleDto";
import { Role } from "@entity/Roles";

class RoleService extends BaseService {
    constructor() {
        super(Role);
    }

    async createRole(payload: RoleDto) {
        const role = new Role();
        role.name = payload.name
        role.slug = payload.slug
        role.permission = payload.permission
        return await this.create(role)
    }

    async updateRoleById(payload: RoleDto): Promise<string> {
        const role: any = await this.findOne(payload.id);
        role.name = payload.name || role.name
        role.slug = payload.slug || role.slug
        role.permission = payload.permission || role.permission
        return await this.updateById(role)
    }
}

export default RoleService;