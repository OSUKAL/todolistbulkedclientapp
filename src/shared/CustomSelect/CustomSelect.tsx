import { memo, MouseEventHandler, useEffect, useRef, useState } from 'react'
import styles from './CustomSelect.module.scss'
import { Option } from './SelectOption/SelectOption.tsx'
import { TicketPriority } from '../../Enums/TicketPriority.ts'
import { TicketState } from '../../Enums/TicketState.ts'
import { TicketType } from '../../Enums/TicketType.ts'

type Props<T> = {
    /**Выбранный вариант*/
    option: T
    /**Варианты выбора*/
    options: T[]
    /**Заполнитель*/
    placeholder?: string
    /**Обработка нажатия*/
    onClick?: (value: T) => void
}

/**
 * Выпадающий список
 */
export const Select = memo<Props<T>>(({
    option,
    options,
    placeholder,
    onClick
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const rootRef = useRef<HTMLDivElement>(null)
    const placeholderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const { target } = event
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                setIsOpen(false)
            }
        }

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [isOpen])

    /**Обработка выбора варианта из выпадающего списка*/
    const handleOptionClick = (value: Option<any>['value']) => {
        setIsOpen(false)
        onClick?.(value)
    }

    /**Обработка открытия списка вариантов*/
    const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen((prev) => !prev)
    }
    
    return (
        <div
            className={styles.select}
            ref={rootRef}
        >
            <div className={styles.arrow}></div>

            <div
                className={styles.placeholder}
                ref={placeholderRef}
                onClick={handlePlaceHolderClick}
                role={'button'}
            >
                {option?.name || placeholder}
            </div>
            {isOpen && (
                <ul className={styles.options}>
                    {options.map((option) => (
                        <Option
                            key={option.value}
                            option={option}
                            onClick={handleOptionClick}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
})


