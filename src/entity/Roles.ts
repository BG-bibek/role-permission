import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export type RoleType = "publisher" | "editor" | "writer";
@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'enum',
        enum: ["publisher", "editor", "writer"],
        default: "publisher"
    })
    name: RoleType

    @Column()
    slug: string

    @Column("text", { array: true })
    permission: string[];

}
