import { memo } from 'react'
import styles from './CustomInput.module.scss'

type Props = {
    /**Заполнитель*/
    placeholder: string
    /**Тип поля ввода*/
    type: string
    
}

/**
 * Поле для ввода текста
 */
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