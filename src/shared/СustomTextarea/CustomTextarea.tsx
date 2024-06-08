import { memo } from 'react'
import styles from './CustomTextarea.module.scss'

type Props = {
    /**Заполнитель*/
    placeholder: string
}

/**
 * Поле для ввода многострочного текста
 */
export const Textarea = memo<Props>(({
    placeholder
}) => {
    return (
        <textarea
            placeholder={placeholder} 
            className={styles.textarea}
       />
    )
})