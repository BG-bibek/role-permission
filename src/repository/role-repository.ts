// import { EntityRepository, Repository } from "typeorm";
// import { Role } from "@entity/roles";

// @EntityRepository(Role)
// export class RoleRepository extends Repository<Role> {
//     findByName(role_name: string) {
//         return this.createQueryBuilder("role")
//             .where("role.role_name = :role_name", { role_name })
//             .getOne();
//     }

//     updateName(id: number, role_name: string) {
//         return this.createQueryBuilder("people")
//             .update()
//             .set({ role_name: role_name })
//             .where("people.id = :id", { id })
//             .execute();
//     }
// }