import { memo, PropsWithChildren, useEffect, useRef } from 'react'
import styles from './ModalBase.module.scss'

type Props = {
    /**Обработка закрытия модального окна*/
    closeModal: () => void
}

/**
 * Базовый компонент модального окна
 */
export const ModalBase = memo<PropsWithChildren<Props>>(({
    children,
    closeModal
}) => {
    const contentRef = useRef<HTMLDivElement>(null)

    /**Обработка нажатия вне содержимого модального окна*/
    const handleClickOutside = (event: MouseEvent) => {
        if(event.target instanceof Node && contentRef.current && !contentRef.current.contains(event.target)){
            closeModal()
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleClickOutside)
        
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [closeModal, handleClickOutside])
    
    return (
        <div className={styles.modal}>
            {/*Тег для работы закрытия по клику вне содержимого модального окна*/}
            <div 
                className={styles.content} 
                ref={contentRef}
            >
                {children}
            </div>
        </div>
    )
})