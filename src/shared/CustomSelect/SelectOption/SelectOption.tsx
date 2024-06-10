import { memo, MouseEventHandler, useRef } from 'react'
import styles from './SelectOption.module.scss'
import { TicketPriority } from '../../../Enums/TicketPriority.ts'
import { TicketState } from '../../../Enums/TicketState.ts'
import { TicketType } from '../../../Enums/TicketType.ts'

/**Вариант выбора*/
export type Option  = {
    /**Название*/
    name: string
    /**Значение*/
    value: TicketPriority | TicketState | TicketType
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