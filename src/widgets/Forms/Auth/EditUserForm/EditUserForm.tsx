import { memo, useState } from 'react'
import { Select } from '../../../../shared/CustomSelect/CustomSelect.tsx'
import { Input } from '../../../../shared/CustomInput/CustomInput.tsx'
import { Button } from '../../../../shared/CustomButton/CustomButton.tsx'
import { FormBase } from '../../../../shared/FormBase/FormBase.tsx'
import type { UserModel } from '../../../../models/User/UserModel.ts'
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
    const handleRoleSelect = (value: UserRole) => {
        setRole(value)
    }

    const selectedRole = roles.find((item) => item.value === role) ?? defaultRole

    return(
        <FormBase title={'Редактирование пользователя'}>
            <Input type={'text'} placeholder={data.username}/>
            <Select<UserRole>
                selected={selectedRole}
                options={roles}
                onClick={handleRoleSelect}
            />
            <Button onClick={()=>{}} title={'Подтвердить'}/>
        </FormBase>
    )
})