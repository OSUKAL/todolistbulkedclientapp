﻿import { BasePage } from '../../shared/BasePage/BasePage.tsx'
import styles from './AuthPage.module.scss'
import { memo } from 'react'
import { Container } from '../../shared/Container/Container.tsx'
import { Content } from '../../shared/Content/Content.tsx'
import { CreateUserForm } from '../../widgets/Auth/CreateUserForm/CreateUserForm.tsx'
import { LoginForm } from '../../widgets/Auth/LoginForm/LoginForm.tsx'
import { EditUserForm } from '../../widgets/Auth/EditUserForm/EditUserForm.tsx'
import type { UserModel } from '../../models/User/UserModel.ts'
import { UserRole } from '../../Enums/UserRole.ts'

/**
 * Экран авторизации
 */
export const AuthPage = memo(() => {
    const user: UserModel = {
        id: '1',
        username: 'ZUVUYER',
        role: UserRole.Admin,
        password: '12345678'
    }
    
    return (
        <div className={styles.auth}>
            <BasePage>
                <Content>
                    <Container>
                        <CreateUserForm/>
                        <LoginForm/>
                        <EditUserForm data={user}/>
                    </Container>
                </Content>
            </BasePage>
        </div>
    )
})