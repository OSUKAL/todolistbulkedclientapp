import { UserRole } from '../../Enums/UserRole.ts'

/**Модель создания пользователя*/
export type CreateUserModel = {
    /**Имя пользователя*/
    username: string
    /**Пароль*/
    password: string
    /**Роль*/
    role: UserRole
}