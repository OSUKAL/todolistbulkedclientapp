import { memo, MouseEventHandler, useRef } from 'react'
import styles from './SelectOption.module.scss'

/**Вариант выбора*/
export type Option<T> = {
    /**Название*/
    name: string
    /**Значение*/
    value: T
}

type Props<T> = {
    /**Вариант выбора*/
    option: Option<T>
    /**Обработка нажатия*/
    onClick: (value: Option<T>['value']) => void
}

/**
 * Элемент выпадающего списка
 */
export const Option = memo<Props<T>>(({
    option: { value, name },
    onClick
}) => {
    const optionRef = useRef<HTMLLIElement>(null)
    
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
            {name}
        </li>
    )
})