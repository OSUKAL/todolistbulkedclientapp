import React, { memo } from 'react'
import styles from './CustomInput.module.scss'

type Props = {
    /**Заполнитель*/
    placeholder: string
    /**Тип поля ввода*/
    type: string
    /**Начальное значение*/
    initValue?: string
    /**Обработка изменения*/
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    /**Ссылка на поле для ввода*/
    inputRef?: React.RefObject<HTMLInputElement>
}

/**Поле для ввода текста*/
export const Input = memo<Props>(({
    inputRef,
    onChange,
    placeholder,
    initValue,
    type
}) => {
    return (
        <input
            className={styles.input}
            ref={inputRef}
            value={initValue}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
})