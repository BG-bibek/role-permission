import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Role } from "./Roles";
@Entity()
export class Permission {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    permission_name: string

    @Column()
    permission_desription: string

    @ManyToMany(() => Role, (role: Role) => role.permission)
    // @JoinTable
    role: Role[]
}
