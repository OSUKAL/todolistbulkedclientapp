import React, { memo, PropsWithChildren, useCallback } from 'react'
import styles from './DropdownMenu.module.scss'

/**Компонент выпадающего списка*/
export const Dropdown = memo<PropsWithChildren>(({
    children
}) => {
    /**Обработка нажатия на выпадающий список*/
    const handleDropdownClick = useCallback((event: React.MouseEvent<HTMLUListElement>) => {
        event.stopPropagation()
    }, [])
    
    return (
        <ul
            className={styles.dropdown}
            onClick={handleDropdownClick}
        >
            {children}
        </ul>
    )
})