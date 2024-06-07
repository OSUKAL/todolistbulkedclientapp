import { memo, PropsWithChildren } from 'react'
import styles from './ModalBase.module.scss'

export const ModalBase = memo<PropsWithChildren>(({
    children
}) => {
    return (
        <div className={styles.base}>
            {children}
        </div>
    )
})