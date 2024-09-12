import { UserRole } from '../../Enums/UserRole.ts'

/**Модель создания пользователя*/
export type CreateUserModel = {
    /**Имя пользователя*/
    username: string
    /**Роль*/
    role: UserRole
    /**Пароль*/
    password: string
}