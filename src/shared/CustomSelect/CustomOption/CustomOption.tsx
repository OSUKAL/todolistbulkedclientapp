import { memo, useCallback } from 'react'
import styles from './CustomOption.module.scss'
import { SelectOption } from './SelectOption.ts'

type Props<T> = {
    /**Вариант выбора*/
    option: SelectOption<T>
    /**Обработка нажатия*/
    onClick: (value: T) => void
}

/**Элемент выпадающего списка*/
function OptionGeneric<T extends number>({
    option,
    onClick
}: Props<T>) {
    /**Обработка нажатия*/
    const handleClick = useCallback((clickedValue: T) => () => onClick(clickedValue), [onClick])

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