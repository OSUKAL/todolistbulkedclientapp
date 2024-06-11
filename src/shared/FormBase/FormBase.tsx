import { memo, PropsWithChildren } from 'react'
import styles from './FormBase.module.scss'
import classNames from 'classnames'

type Props = {
    /**Название формы*/
    title: string
    /**Находится ли в модальном окне*/
    isInModal?: boolean
}

/**
 * Базовый компонент формы
 */
export const FormBase = memo<PropsWithChildren<Props>>(({
    isInModal = false,
    title,
    children
}) => {
    const modalStyles = classNames(styles.form, styles.edit)
    
    return(
        <div
            className={isInModal ? modalStyles : styles.form}
        >
            <h2 className={styles.header}>{title}</h2>
            {children}
        </div>
    )
})