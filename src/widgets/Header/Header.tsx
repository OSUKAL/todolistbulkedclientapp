import { memo, useCallback } from 'react'
import styles from './Header.module.scss'
import { Container } from '../../shared/Container/Container.tsx'
import { useNavigate } from 'react-router-dom'

type Props = {
    /**Статус авторизации*/
    isLoggedIn: boolean
}

/**Шапка страницы*/
export const Header = memo<Props>(({
    isLoggedIn = true
}) => {
    const navigate = useNavigate()
    
    /**Обработка нажания на кнопку авторизации*/
    const handleAuthClick = useCallback(() => navigate('/auth'), [navigate])

    /**Обработка нажания на кнопку главная*/
    const handleMaihClick = useCallback(() => navigate('/main'), [navigate])

    /**Обработка нажания на кнопку задачи*/
    const handleTicketClick = useCallback(() => navigate('/task'), [navigate])

    /**Обработка нажатия на кнопку выхода*/
    const handleLogoutClick = useCallback(() => {
        navigate('/auth')
        
        //Метод деавторизации
    }, [navigate])
    
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.header__inner}>
                    <a className={styles.logo} href={'/main'}>TodoListBULKED</a>

                    <nav className={styles.nav}>
                        {isLoggedIn && 
                            <div className={styles.link} onClick={handleLogoutClick}>Выход</div>
                        }
                        <div className={styles.link} onClick={handleAuthClick}>Авторизация</div>
                        <div className={styles.link} onClick={handleMaihClick}>Главная</div>
                        <div className={styles.link} onClick={handleTicketClick}>Задача</div>
                    </nav>
                </div>
            </Container>
        </div>
    )
})