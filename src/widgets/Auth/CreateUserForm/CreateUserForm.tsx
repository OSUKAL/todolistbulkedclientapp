import { memo, useState } from 'react'
import { Select } from '../../../shared/CustomSelect/CustomSelect.tsx'
import { Input } from '../../../shared/CustomInput/CustomInput.tsx'
import { Button } from '../../../shared/CustomButton/CustomButton.tsx'
import { FormBase } from '../../../shared/FormBase/FormBase.tsx'

const roles = [
    {title: 'Администратор', value: '1'},
    {title: 'Руководитель команды', value: '2'},
    {title: 'Разработчик', value: '3'},
    {title: 'Тестировщик', value: '4'},
    {title: 'Аналитик', value: '5'}
]

/**
 * Форма создания пользователя
 */
export const CreateUserForm = memo(() => {
    const [role, setRole] = useState('')
    const handleRoleSelect = (value: string) => {
        setRole(value)
    }
    
    const selectedRole = roles.find((item) => item.value === role)
    
    return(
        <FormBase title={'Создание пользователя'}>
            <Input type={'text'} placeholder={'Имя пользователя'}/>
            <Input type={'password'} placeholder={'Пароль'}/>
            <Input type={'password'} placeholder={'Повторите пароль'}/>
            <Select
                option={selectedRole || null} 
                options={roles}
                onClick={handleRoleSelect}
                placeholder={'Выберите роль'}
            />
            <Button onClick={()=>{}} title={'Создать'}/>
        </FormBase>
    )
})