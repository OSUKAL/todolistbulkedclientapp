import { memo, useCallback, useRef, useState } from 'react'
import { Select } from '../../../../shared/CustomSelect/CustomSelect.tsx'
import { Input } from '../../../../shared/CustomInput/CustomInput.tsx'
import { Button } from '../../../../shared/CustomButton/CustomButton.tsx'
import { FormBase } from '../../../../shared/FormBase/FormBase.tsx'
import { UserRole } from '../../../../Enums/UserRole.ts'
import type { NamedUserRole } from '../../../../Enums/NamedEnums/NamedUserRole.ts'
import type { CreateUserModel } from '../../../../models/User/CreateUserModel.ts'
import { toast } from 'sonner'

const roles: NamedUserRole[] = [
    { name: 'Администратор', value: UserRole.Admin },
    { name: 'Руководитель команды', value: UserRole.TeamLeader },
    { name: 'Разработчик', value: UserRole.Developer },
    { name: 'Тестировщик', value: UserRole.Tester },
    { name: 'Аналитик', value: UserRole.Analyst }
]

const defaultRole: NamedUserRole = {
    name: 'Укажите роль пользователя', value: UserRole.Unknown
}

/**Форма создания пользователя*/
export const CreateUserForm = memo(() => {
    const [role, setRole] = useState(UserRole.Unknown)
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const repeatPasswordRef = useRef<HTMLInputElement>(null)

    const selectedRole = roles.find((item) => item.value === role) ?? defaultRole

    /**Обработка выбора роли*/
    const handleRoleSelect = useCallback((value: UserRole) => {
        setRole(value)
    }, [setRole])

    /**Обработка нажатия на кнопку создания пользователя*/
    const handleCreateClick = useCallback(() => {
        if (usernameRef.current!.value === '') {
            toast.warning('Введите имя пользователя')
            return
        }
        if (passwordRef.current!.value === '') {
            toast.warning('Введите пароль')
            return
        }
        if (repeatPasswordRef.current!.value === '') {
            toast.warning('Повторите пароль')
            return
        }
        if (passwordRef.current!.value !== repeatPasswordRef.current!.value) {
            toast.warning('Пароли должны совпадать')
            return
        }
        if (role === defaultRole.value) {
            toast.warning('Укажите роль')
            return
        }

        const userData: CreateUserModel = {
            username: usernameRef.current!.value,
            password: passwordRef.current!.value,
            role: role
        }

        console.log(userData) //Передача объекта в запрос

    }, [role, usernameRef, passwordRef, repeatPasswordRef])

    return (
        <FormBase title={'Создание пользователя'}>
            <Input
                inputRef={usernameRef}
                type={'text'}
                placeholder={'Имя пользователя'}
            />
            <Input
                inputRef={passwordRef}
                type={'password'}
                placeholder={'Введите пароль'}
            />
            <Input
                inputRef={repeatPasswordRef}
                type={'password'}
                placeholder={'Повторите пароль'}
            />
            <Select<UserRole>
                selected={selectedRole}
                options={roles}
                onClick={handleRoleSelect}
            />
            <Button
                title={'Создать'}
                onClick={handleCreateClick}
            />
        </FormBase>
    )
})