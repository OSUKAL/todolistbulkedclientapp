import { UserRole } from '../../Enums/UserRole.ts'

/**Модель пользователя с изменениями*/
export type EditUserModel = {
    /**Идентификатор*/
    id:string
    /**Имя пользователя*/
    username: string
    /**Роль*/
    role: UserRole
}