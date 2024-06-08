import { memo, useState } from 'react'
import { Select } from '../../../shared/CustomSelect/CustomSelect.tsx'
import { Input } from '../../../shared/CustomInput/CustomInput.tsx'
import { Button } from '../../../shared/CustomButton/CustomButton.tsx'
import { FormBase } from '../../../shared/FormBase/FormBase.tsx'
import type { UserModel } from '../../../models/User/UserModel.ts'

const roles = [
    {title: 'Администратор', value: '1'},
    {title: 'Руководитель команды', value: '2'},
    {title: 'Разработчик', value: '3'},
    {title: 'Тестировщик', value: '4'},
    {title: 'Аналитик', value: '5'}
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
    const [role, setRole] = useState('')
    const handleRoleSelect = (value: string) => {
        setRole(value)
    }

    const selectedRole = roles.find((item) => item.value === role)

    return(
        <FormBase title={'Редактирование пользователя'}>
            <Input type={'text'} placeholder={data.username}/>
            <Select
                option={selectedRole || null}
                options={roles}
                onClick={handleRoleSelect}
                placeholder={data.role.toString()}
            />
            <Button onClick={()=>{}} title={'Подтвердить'}/>
        </FormBase>
    )
})