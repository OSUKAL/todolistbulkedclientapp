import { memo, PropsWithChildren } from 'react'
import styles from './Container.module.scss'

/**
 * Контейнер
 */
export const Container = memo<PropsWithChildren>(({ 
    children 
}) => {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
})