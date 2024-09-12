import { memo, PropsWithChildren } from 'react'
import styles from './FormBase.module.scss'
import classNames from 'classnames'

type Props = {
    /**Название формы*/
    title: string
    /**Находится ли в модальном окне*/
    isInModal?: boolean
    /**Обработка закрытия модального окна*/
    closeModal?: () => void
}

/**Базовый компонент формы*/
export const FormBase = memo<PropsWithChildren<Props>>(({
    isInModal = false,
    closeModal,
    title,
    children
}) => {
    const modalStyles = classNames(styles.form, styles.edit)
    
    return(
        <div
            className={isInModal ? modalStyles : styles.form}
        >
            <h2 className={styles.header}>
                {title}

                {isInModal && (
                    <div onClick={closeModal} className={styles.close}>+</div>
                )}
            </h2>
            
            {children}
        </div>
    )
})