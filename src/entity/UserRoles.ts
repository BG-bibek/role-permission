import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Column } from "typeorm";
import { User } from "@entity/User";
import { Role } from "@entity/Roles";

@Entity()
export class UserRole {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.id, {
        onDelete: "CASCADE"
    })
    user: User['id'];

    @ManyToOne(() => Role, (role) => role, {
        onDelete: "CASCADE", eager: true
    })
    @JoinColumn()
    role: Role;

}