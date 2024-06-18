import { memo, useCallback, useRef } from 'react'
import { Input } from '../../../../shared/CustomInput/CustomInput.tsx'
import { Button } from '../../../../shared/CustomButton/CustomButton.tsx'
import { FormBase } from '../../../../shared/FormBase/FormBase.tsx'
import type { LoginModel } from '../../../../models/Auth/LoginModel.ts'

/**Форма авторизации*/
export const LoginForm = memo(() => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    
    /**Обработка нажатия на кнопку создания пользователя*/
    const handleLoginClick = useCallback(() => {
        if(usernameRef.current === null || usernameRef.current.value === ''){
            console.log('Указано неверное имя пользователя')
            return
        }
        if(passwordRef.current === null || passwordRef.current.value === ''){
            console.log('Указан неверный пароль')
            return
        }
        
        const loginData: LoginModel = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }
        
        console.log(loginData) //Передача объекта в запрос
        
    }, [usernameRef, passwordRef])
    
    return (
        <FormBase isInModal={false} title={'Авторизация'}>
            <Input inputRef={usernameRef} placeholder={'Имя пользователя'} type={'text'}/>
            <Input inputRef={passwordRef} placeholder={'Пароль'} type={'password'}/>
            <Button onClick={handleLoginClick} title={'Войти'}/>
        </FormBase>
    )
})