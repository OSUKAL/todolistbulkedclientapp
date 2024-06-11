import { memo, useState } from 'react'
import { Select } from '../../../../shared/CustomSelect/CustomSelect.tsx'
import { Input } from '../../../../shared/CustomInput/CustomInput.tsx'
import { Button } from '../../../../shared/CustomButton/CustomButton.tsx'
import { FormBase } from '../../../../shared/FormBase/FormBase.tsx'
import type { UserModel } from '../../../../models/User/UserModel.ts'
import { UserRole } from '../../../../Enums/UserRole.ts'
import { RoleName } from '../../Models/RoleName.ts'

const roles:RoleName[] = [
    {name: 'Администратор', value: UserRole.Admin},
    {name: 'Руководитель команды', value: UserRole.TeamLeader},
    {name: 'Разработчик', value: UserRole.Developer},
    {name: 'Тестировщик', value: UserRole.Tester},
    {name: 'Аналитик', value: UserRole.Analyst}
]

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

    const selectedRole = roles.find((item) => item.value === role)

    return(
        <FormBase title={'Редактирование пользователя'}>
            <Input type={'text'} placeholder={data.username}/>
            <Select<UserRole>
                selected={selectedRole || roles[data.role]}
                options={roles}
                onClick={handleRoleSelect}
                placeholder={data.role.toString()}
            />
            <Button onClick={()=>{}} title={'Подтвердить'}/>
        </FormBase>
    )
})