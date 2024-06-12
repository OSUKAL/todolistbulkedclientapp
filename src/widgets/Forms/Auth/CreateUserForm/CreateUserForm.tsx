import { memo, useState } from 'react'
import { Select } from '../../../../shared/CustomSelect/CustomSelect.tsx'
import { Input } from '../../../../shared/CustomInput/CustomInput.tsx'
import { Button } from '../../../../shared/CustomButton/CustomButton.tsx'
import { FormBase } from '../../../../shared/FormBase/FormBase.tsx'
import { UserRole } from '../../../../Enums/UserRole.ts'
import { NamedUserRole } from '../../Models/NamedUserRole.ts'

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

/**
 * Форма создания пользователя
 */
export const CreateUserForm = memo(() => {
    const [role, setRole] = useState(UserRole.Unknown)
    const handleRoleSelect = (value: UserRole) => {
        setRole(value)
    }
    
    const selectedRole = roles.find((item) => item.value === role) ?? defaultRole
    
    return(
        <FormBase title={'Создание пользователя'}>
            <Input type={'text'} placeholder={'Имя пользователя'}/>
            <Input type={'password'} placeholder={'Пароль'}/>
            <Input type={'password'} placeholder={'Повторите пароль'}/>
            <Select<UserRole>
                selected={selectedRole || roles[UserRole.Unknown]} 
                options={roles}
                onClick={handleRoleSelect}
            />
            <Button onClick={()=>{}} title={'Создать'}/>
        </FormBase>
    )
})