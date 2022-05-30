import BaseService from "./baseService";
import { UserRole } from "@entity/UserRoles";
import { User } from "../entity/User";
import { Role } from "../entity/Roles";
import { AppDataSource } from "../data-source";
import CustomError from "../errors/customError";
const RoleModel = AppDataSource.getRepository(Role);
const UserModel = AppDataSource.getRepository(User);
const UserRoleModel = AppDataSource.getRepository(UserRole);


class userRoleService {

    customError(code: Number, msg: String) {
        throw new CustomError({ statusCode: code, msg: msg });
    }

    async createUserRole(payload: any) {
        let userPermission: number[] = []
        const userId = +payload.userId;
        const roleIds: number[] = payload.roleId;
        const userData = await UserModel.findOneBy({ id: userId });
        if (!userData) return this.customError(404, "User resources not found!")

        let existedData = await UserRoleModel.createQueryBuilder('userRole')
            .leftJoinAndSelect(
                "userRole.role",
                "role",
            )
            .where("userRole.user = :id", { id: userId })
            .getMany();

        for (const userRoleData of existedData) {
            userPermission.push(userRoleData.role.id)
        }
        for (const roleId of roleIds) {
            let flag: boolean = false;
            const roleData = await RoleModel.findOneBy({ id: roleId });
            if (!roleData) return this.customError(404, "Role resources not found!")
            for (const permission of userPermission) {
                if (permission === roleId) flag = true;
            }

            if (flag) continue;
            const userRole = new UserRole();
            userRole.user = userData.id;
            userRole.role = roleData;
            try {
                await UserRoleModel.save(userRole);
            } catch (e) {
                console.log(e)
            }
        }
        return "Resource created successfully";
    }

}
export default userRoleService;