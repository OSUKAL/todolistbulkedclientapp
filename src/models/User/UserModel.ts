import { UserRole } from '../../Enums/UserRole.ts'

/**Модель пользователя*/
export type UserModel = {
    /**Идентификатор*/
    id: string
    /**Имя пользователя*/
    username: string
    /**Роль*/
    role: UserRole
    /**Пароль*/
    password: string
}