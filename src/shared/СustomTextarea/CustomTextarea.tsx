import { memo } from 'react'
import styles from './CustomTextarea.module.scss'

type Props = {
    placeholder: string
}

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