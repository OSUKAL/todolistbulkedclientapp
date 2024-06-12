import React, { memo, useCallback, useState } from 'react'
import styles from './CustomTextarea.module.scss'

type Props = {
    /**Заполнитель*/
    placeholder: string
    /**Значение*/
    initValue?: string
}

/**
 * Поле для ввода многострочного текста
 */
export const Textarea = memo<Props>(({
    initValue,
    placeholder
}) => {
    const [value, setValue] = useState(initValue)
    
    const handleValueChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value)
    },[setValue])
    
    return (
        <textarea
            defaultValue={value}
            placeholder={placeholder} 
            className={styles.textarea}
            onChange={handleValueChange}
       />
    )
})