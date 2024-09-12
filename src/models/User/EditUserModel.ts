import { UserRole } from '../../Enums/UserRole.ts'

/**Модель пользователя с изменениями*/
export type EditUserModel = {
    /**Идентификатор*/
    id: string
    /**Роль*/
    role: UserRole
    /**Имя пользователя*/
    username: string
}