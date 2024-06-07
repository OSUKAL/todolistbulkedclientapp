import { memo } from 'react'
import styles from './Header.module.scss'
import { Container } from '../../shared/Container/Container.tsx'

type Props = {
    isLoggedIn: boolean
}

export const Header = memo<Props>(({
    isLoggedIn = false
}) => {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.header__inner}>
                    <a className={styles.logo} href={'/main'}>TodoListBULKED</a>

                    <nav className={styles.nav}>
                        {isLoggedIn && 
                            <a className={styles.link} href={'/auth'}>Выход</a>
                        }
                        <a className={styles.link} href={'/auth'}>Авторизация</a>
                        <a className={styles.link} href={'/main'}>Главная</a>
                        <a className={styles.link} href={'/task'}>Задача</a>
                    </nav>
                </div>
            </Container>
        </div>
    )
})