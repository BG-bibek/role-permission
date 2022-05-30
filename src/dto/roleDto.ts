export type RoleType = "publisher" | "editor" | "writer";
export default interface RoleDto {
    id?: number,
    name: RoleType,
    slug: string,
    permission: string[]
}