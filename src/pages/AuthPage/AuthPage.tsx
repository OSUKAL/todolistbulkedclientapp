import { BasePage } from '../../shared/BasePage/BasePage.tsx'
import { memo } from 'react'
import { Container } from '../../shared/Container/Container.tsx'
import { Content } from '../../shared/Content/Content.tsx'
import { CreateUserForm } from '../../widgets/Forms/Auth/CreateUserForm/CreateUserForm.tsx'
import { LoginForm } from '../../widgets/Forms/Auth/LoginForm/LoginForm.tsx'
import { EditUserForm } from '../../widgets/Forms/Auth/EditUserForm/EditUserForm.tsx'
import type { UserModel } from '../../models/User/UserModel.ts'
import { UserRole } from '../../Enums/UserRole.ts'

/**
 * Страница авторизации
 */
export const AuthPage = memo(() => {
    const user: UserModel = {
        id: '1',
        username: 'ZUVUYER',
        role: UserRole.Admin,
        password: '12345678'
    }

    return (
        <BasePage>
            <Content>
                <Container>
                    <CreateUserForm/>
                    <LoginForm/>
                    <EditUserForm data={user}/>
                </Container>
            </Content>
        </BasePage>
    )
})