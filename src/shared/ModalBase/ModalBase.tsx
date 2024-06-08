import { memo, PropsWithChildren } from 'react'
import styles from './ModalBase.module.scss'

type Props = {
    /**Закрытие модального окна*/
    close: () => void
}

/**
 * Базовый компонент модального окна
 */
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