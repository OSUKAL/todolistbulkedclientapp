import { memo, PropsWithChildren } from 'react'
import styles from './ModalBase.module.scss'

type Props = {
    close: () => void
}

export const ModalBase = memo<PropsWithChildren<Props>>(({
    children,
    close
}) => {
    
    return (
        <div
            onClick={close}
            className={styles.base}
        >
            {children}
        </div>
    )
})