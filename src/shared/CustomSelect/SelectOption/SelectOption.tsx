import { memo, MouseEventHandler } from 'react'
import styles from './SelectOption.module.scss'

/**Вариант выбора*/
export type Option<T> = {
    /**Название*/
    name: string
    /**Значение*/
    value: T
}

type Props<T extends number> = {
    /**Вариант выбора*/
    option: Option<T>
    /**Обработка нажатия*/
    onClick: (value: Option<T>['value']) => void
}

/**
 * Элемент выпадающего списка
 */
function OptionGeneric<T extends number>({
    option,
    onClick
}: Props<T>) {
    const handleClick = (clickedValue: Option<T>['value']): MouseEventHandler<HTMLLIElement> =>
        () => {
            onClick(clickedValue)
        }
        
    return (
        <li
            className={styles.option}
            value={option.value}
            onClick={handleClick(option.value)}
            tabIndex={0}
        >
            {option.name}
        </li>
    )
}

export const Option = memo(OptionGeneric) as typeof OptionGeneric