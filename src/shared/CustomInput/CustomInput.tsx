import React, { memo, useCallback, useState } from 'react'
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
    const [value, setValue] = useState(initValue ?? '')
    
    /**Обработка изменения*/
    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [setValue])
    
    return (
        <input
            defaultValue={value}
            className={styles.input}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
})