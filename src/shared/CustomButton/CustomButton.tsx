import { memo } from 'react'
import styles from './CustomButton.module.scss'

type Props = {
    onClick?: () => void
    title: string
}

export const Button = memo<Props>(({
    title,
    onClick
}) => {
    return (
        <button 
            className={styles.button}
            onClick={onClick}
        >
            {title}
        </button>
    )
})