import React, { memo } from 'react'
import styles from './CustomButton.module.scss'

type Props = {
    onClick: () => void
    title: string
}

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