import { Permission } from "@entity/Permissions"
import { Role } from "@entity/Roles"
import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { UserRole } from "./entity/UserRoles"
import { Book } from "./entity/Book";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User, Role, Permission, UserRole, Book],
    migrations: [],
    subscribers: [],
})

// const userRole = new UserRole();
// userRole.role.id
// async function initial() {

//     const repository = AppDataSource.getRepository(Role);
//     const role = new Role();
//     role.role_name = "User";
//     role.role_description = "This is given to all the end-users";
//     console.log(role);
//     await repository.save(role)
// }

// initial();
