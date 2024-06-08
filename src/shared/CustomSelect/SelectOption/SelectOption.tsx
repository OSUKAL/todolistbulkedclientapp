﻿import { memo, MouseEventHandler, useEffect, useRef } from 'react'
import styles from './SelectOption.module.scss'

/**Вариант выбора*/
export type Option = {
    /**Название*/
    title: string
    /**Значение*/
    value: string
}

type Props = {
    /**Вариант выбора*/
    option: Option
    /**Обработка нажатия*/
    onClick: (value: Option['value']) => void
}

/**
 * Элемент выпадающего списка
 */
export const Option = memo<Props>(({
    option: { value, title },
    onClick
}) => {
    const optionRef = useRef<HTMLLIElement>(null)
    
    useEffect(() => {
        const option = optionRef.current
        if(!option)
            return
        
        const handleEnterPress = (event: KeyboardEvent) => {
            if((document.activeElement === option) && event.key === 'Enter') {
                onClick(value)
            }
        }
        
        option.addEventListener('keydown', handleEnterPress)
        
        return () => {
            option.removeEventListener('keydown', handleEnterPress)
        }
    }, [value, onClick])


    /**Обработка нажатия на вариант выпадающего списка*/
    const handleClick = (clickedValue: Option['value']): MouseEventHandler<HTMLLIElement> =>
        () => {
            onClick(clickedValue)
        }

    return (
        <li
            className={styles.option}
            ref={optionRef}
            value={value}
            onClick={handleClick(value)}
            tabIndex={0}
        >
            {title}
        </li>
    )
})