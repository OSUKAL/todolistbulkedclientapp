import { memo, PropsWithChildren } from 'react'
import styles from './BasePage.module.scss'
import { Header } from '../../widgets/Header/Header.tsx'

type Props = {
    showHeader?: boolean
}
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