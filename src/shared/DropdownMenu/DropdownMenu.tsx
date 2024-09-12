import React, { memo, PropsWithChildren, useCallback } from 'react'
import styles from './DropdownMenu.module.scss'

type Props = {
    /**Количество видимых опций*/
    visibleOptions?: number
    /**Общее количесвто опций*/
    totalOptions: number
}

/**Компонент выпадающего списка*/
export const Dropdown = memo<PropsWithChildren<Props>>(({
    visibleOptions,
    totalOptions,
    children
}) => {
    /**Обработка нажатия на выпадающий список*/
    const handleDropdownClick = useCallback((event: React.MouseEvent<HTMLUListElement>) => {
        event.stopPropagation()
    }, [])
    
    const dropdownHeight = visibleOptions && visibleOptions < totalOptions ? `${visibleOptions * 32.8 + 16.4}px` : 'max-content'
    
    return (
        <ul
            className={styles.dropdown}
            style={{height: dropdownHeight}}
            onClick={handleDropdownClick}
        >
            {children}
        </ul>
    )
})