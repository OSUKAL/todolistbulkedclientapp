import { memo } from 'react'
import { Input } from '../../../shared/CustomInput/CustomInput.tsx'
import { Button } from '../../../shared/CustomButton/CustomButton.tsx'
import { FormBase } from '../../../shared/FormBase/FormBase.tsx'

export const LoginForm = memo(() => {
    return (
        <FormBase isInModal={false} title={'Авторизация'}>
            <Input placeholder={'Имя пользователя'} type={'text'}/>
            <Input placeholder={'Пароль'} type={'password'}/>
            <Button title={'Войти'}/>
        </FormBase>
    )
})