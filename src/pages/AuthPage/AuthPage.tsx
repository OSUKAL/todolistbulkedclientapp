import { BasePage } from '../../shared/BasePage/BasePage.tsx'
import styles from './AuthPage.module.scss'
import { memo } from 'react'
import { Container } from '../../shared/Container/Container.tsx'
import { Content } from '../../shared/Content/Content.tsx'
import { CreateUserForm } from '../../widgets/Auth/CreateUserForm/CreateUserForm.tsx'
import { LoginForm } from '../../widgets/Auth/LoginForm/LoginForm.tsx'
import { EditUserForm } from '../../widgets/Auth/EditUserForm/EditUserForm.tsx'
import { UserModel } from '../../models/User/UserModel.ts'

export const AuthPage = memo(() => {
    const user: UserModel = {
        id: '1',
        username: 'ZUVUYER',
        role: 'Администратор',
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