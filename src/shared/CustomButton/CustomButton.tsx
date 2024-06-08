import React, { memo } from 'react'
import styles from './CustomButton.module.scss'

type Props = {
    /**Обработка нажатия*/
    onClick: () => void
    /**Название кнопки*/
    title: string
}

/**
 * Кнопка
 */
export const Button = memo<Props>(({
    title,
    onClick
}) => {
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        onClick()
    }
    
    return (
        <button 
            className={styles.button}
            onClick={handleClick}
        >
            {title}
        </button>
    )
})