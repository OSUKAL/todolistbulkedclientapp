import { memo } from 'react'
import { Input } from '../../../../shared/CustomInput/CustomInput.tsx'
import { Button } from '../../../../shared/CustomButton/CustomButton.tsx'
import { FormBase } from '../../../../shared/FormBase/FormBase.tsx'

/**
 * Форма авторизации
 */
export const LoginForm = memo(() => {
    return (
        <FormBase isInModal={false} title={'Авторизация'}>
            <Input placeholder={'Имя пользователя'} type={'text'}/>
            <Input placeholder={'Пароль'} type={'password'}/>
            <Button onClick={() => {}} title={'Войти'}/>
        </FormBase>
    )
})