import React, { memo } from 'react'
import styles from './CustomTextarea.module.scss'

type Props = {
    /**Заполнитель*/
    placeholder: string
    /**Начальное значение*/
    initValue?: string
    /**Обработка изменения*/
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    /**Ссылка на поле для ввода*/
    textareaRef?: React.RefObject<HTMLTextAreaElement>
}

/**
 * Поле для ввода многострочного текста
 */
export const Textarea = memo<Props>(({
    textareaRef,
    initValue,
    onChange,
    placeholder
}) => {
    return (
        <textarea
            ref={textareaRef}
            value={initValue}
            placeholder={placeholder} 
            className={styles.textarea}
            onChange={onChange}
       />
    )
})