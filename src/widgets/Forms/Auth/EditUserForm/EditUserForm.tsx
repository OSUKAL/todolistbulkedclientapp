import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Select } from '../../../../shared/CustomSelect/CustomSelect.tsx'
import { Input } from '../../../../shared/CustomInput/CustomInput.tsx'
import { Button } from '../../../../shared/CustomButton/CustomButton.tsx'
import { FormBase } from '../../../../shared/FormBase/FormBase.tsx'
import type { UserModel } from '../../../../models/User/UserModel.ts'
import { UserRole } from '../../../../Enums/UserRole.ts'
import type { NamedUserRole } from '../../Models/NamedUserRole.ts'
import type { EditUserModel } from '../../../../models/User/EditUserModel.ts'

const roles: NamedUserRole[] = [
    {name: 'Администратор', value: UserRole.Admin},
    {name: 'Руководитель команды', value: UserRole.TeamLeader},
    {name: 'Разработчик', value: UserRole.Developer},
    {name: 'Тестировщик', value: UserRole.Tester},
    {name: 'Аналитик', value: UserRole.Analyst}
]

const defaultRole: NamedUserRole = {
    name: 'Укажите роль пользователя', value: UserRole.Unknown
}

type Props = {
    /**Данные пользователя*/
    data: UserModel
}

/**
 * Форма изменения пользователя
 */
export const EditUserForm = memo<Props>(({
    data
}) => {
    const [role, setRole] = useState(data.role)
    const usernameRef = useRef<HTMLInputElement>(null)

    /**Обработка установки значения текущего имени пользователя в поле для ввода*/
    const handleSetUsernameInitValue = useCallback(() => {
        if (usernameRef.current === null)
            return

        usernameRef.current.value = data.username

    }, [usernameRef])
    
    useEffect(() => {
        handleSetUsernameInitValue()

        return () => {} //Возможно, чего-то нехватает
    }, [handleSetUsernameInitValue])
    
    /**Обработка выбора роли*/
    const handleRoleSelect = (value: UserRole) => {
        setRole(value)
    }
    
    /**Обработка нажатия на кнопку подтверждения изменений*/
    const handleConfirmClick = useCallback(() => {
        if(usernameRef.current === null || usernameRef.current.value === ''){
            console.log('Введите имя пользователя')
            return
        }
        
        const userData: EditUserModel = {
            id: data.id,
            username: usernameRef.current.value,
            role: role
        }
        
        console.log(userData) //Передача объекта в запрос
        
    }, [usernameRef, role])
    
    const selectedRole = roles.find((item) => item.value === role) ?? defaultRole

    return(
        <FormBase title={'Редактирование пользователя'}>
            <Input
                type={'text'}
                placeholder={'Укажите новое имя пользователя'}
                inputRef={usernameRef} 
            />
            <Select<UserRole>
                selected={selectedRole}
                options={roles}
                onClick={handleRoleSelect}
            />
            <Button onClick={handleConfirmClick} title={'Подтвердить'}/>
        </FormBase>
    )
})