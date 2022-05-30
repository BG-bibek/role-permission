import UserService from "@service/userService";
import RoleService from "@service/roleService";
import UserRoleService from "@service/userRolesService";
import BookService from "@service/bookService";

class ServiceProvider {
    static instance: any = {}

    providers = [
        {
            name: 'UserService',
            path: UserService
        },
        {
            name: 'RoleService',
            path: RoleService
        },
        {
            name: 'UserRoleService',
            path: UserRoleService
        },
        {
            name: 'BookService',
            path: BookService
        }

    ]

    constructor() {
        for (const provider of this.providers) {
            if (!ServiceProvider.instance[provider.name]) {
                ServiceProvider.instance[provider.name] = new provider.path()
            }
        }
    }

    getInstance() {
        return ServiceProvider.instance
    }
}

export default new ServiceProvider().getInstance();