import { memo, useCallback } from 'react'
import styles from './Header.module.scss'
import { Container } from '../../shared/Container/Container.tsx'
import { useNavigate } from 'react-router-dom'

type Props = {
    /**Статус авторизации*/
    isLoggedIn: boolean
}

/**
 * Шапка экрана
 */
export const Header = memo<Props>(({
    isLoggedIn = false
}) => {
    const navigateTo = useNavigate()
    
    const handleAuthClick = useCallback(() => {
        navigateTo('/auth')
    }, [navigateTo])
    const handleMaihClick = useCallback(() => {
        navigateTo('/main')
    }, [navigateTo])
    const handleTicketClick = useCallback(() => {
        navigateTo('/task')
    }, [navigateTo])
    const handleLogoutClick = useCallback(() => {
        navigateTo('/auth')
    }, [navigateTo])
    
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