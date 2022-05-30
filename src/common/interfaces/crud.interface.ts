export interface CRUD {
    list: () => Promise<any>,
    create: (resource: any) => Promise<void | string>,
    updateById: (resourceId: any) => Promise<string>,
    readById: (resourceId: any) => Promise<any>,
    deleteById: (resourceId: any) => Promise<void | string>,
    findOne: (query: number) => Promise<any>
}