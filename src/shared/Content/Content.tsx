import { memo, PropsWithChildren } from 'react'
import styles from './Content.module.scss'

/**
 * Компонент вертикального центрирования
 */
export const Content = memo<PropsWithChildren>(({
    children
}) => {
    return(
        <div className={styles.content}>
            {children}
        </div>
    )
})