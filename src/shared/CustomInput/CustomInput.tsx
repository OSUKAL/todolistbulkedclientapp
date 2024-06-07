import { memo } from 'react'
import styles from './CustomInput.module.scss'

type Props = {
    placeholder: string
    type: string
    
}

export const Input = memo<Props>(({
    placeholder,
    type
}) => {
    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
        />
    )
})