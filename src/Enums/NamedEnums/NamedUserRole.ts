import { UserRole } from '../UserRole.ts'

/**Именованная роль пользователя*/
export type NamedUserRole = {
    /**Название*/
    name: string
    /**Роль*/
    value: UserRole
}