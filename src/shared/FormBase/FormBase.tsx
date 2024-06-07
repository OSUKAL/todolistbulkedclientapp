import React, { memo, PropsWithChildren } from 'react'
import styles from './FormBase.module.scss'
import classNames from 'classnames'

type Props = {
    title: string
    isInModal?: boolean
}

export const FormBase = memo<PropsWithChildren<Props>>(({
    isInModal = false,
    title,
    children
}) => {
    const modalStyles = classNames(styles.form, styles.edit)
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
    }
    
    return(
        <div
            onClick={handleClick}
            className={isInModal ? modalStyles : styles.form}
        >
            <h2 className={styles.header}>{title}</h2>
            {children}
        </div>
    )
})