import { memo } from 'react'
import styles from './CustomInput.module.scss'

type Props = {
    /**Заполнитель*/
    placeholder: string
    /**Тип поля ввода*/
    type: string
    /**Начальное значение*/
    initValue?: string
}

/**
 * Поле для ввода текста
 */
export const Input = memo<Props>(({
    placeholder,
    initValue,
    type
}) => {
    return (
        <input
            defaultValue={initValue}
            className={styles.input}
            type={type}
            placeholder={placeholder}
        />
    )
})