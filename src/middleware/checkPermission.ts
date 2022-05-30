import { Request, Response, NextFunction } from "express";
import { UserRole } from "@entity/UserRoles";
import { AppDataSource } from "../data-source";
const UserRoleModel = AppDataSource.getRepository(UserRole);

let userPermission: string[] = []

function checkPermission(getPermission: string) {

    return async function (req: Request, res: Response, next: NextFunction) {
        let userId = +req.params.id;
        const userRoles = await UserRoleModel.createQueryBuilder('userRole')
            .leftJoinAndSelect(
                "userRole.role",
                "role",
            )
            .where("userRole.user = :id", { id: userId })
            .getMany();

        if (!userRoles[0]) {
            return res.status(401).send({
                code: 401,
                message: "UnAuthorized!"
            });
        }
        for (const userRoleData of userRoles) {
            userPermission = userPermission.concat(userRoleData.role.permission)
        }
        for (const permission of userPermission) {
            if (permission === getPermission) return next();
        }
        return res.status(401).send({
            code: 401,
            message: "UnAuthorized!"
        });
    }
}
export default checkPermission;