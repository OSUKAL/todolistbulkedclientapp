import { memo, PropsWithChildren } from 'react'
import styles from './BasePage.module.scss'
import { Header } from '../../widgets/Header/Header.tsx'

type Props = {
    /**Видимость шапки экрана*/
    showHeader?: boolean
}

/**
 * База страницы
 */
export const BasePage = memo<PropsWithChildren<Props>>(({
    children,
    showHeader = true
}) => {
    return (
        <div className={styles.page}>
            {showHeader && (
                <Header isLoggedIn={true}/>
            )}
            {children}
        </div>
    )
})