import { memo, PropsWithChildren, useEffect, useRef } from 'react'
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
    const contentRef = useRef<any>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if(event.target instanceof Node && contentRef.current && !contentRef.current.contains(event.target)){
            console.log('Клик вне контента')
            close()
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleClickOutside)
        
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [close, handleClickOutside])
    
    return (
        <div className={styles.modal}>
            <div className={styles.content} ref={contentRef}>
                {children}
            </div>
        </div>
    )
})