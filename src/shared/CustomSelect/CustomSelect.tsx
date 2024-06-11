import React, { memo, MouseEventHandler, useEffect, useRef, useState } from 'react'
import styles from './CustomSelect.module.scss'
import { Option } from './SelectOption/SelectOption.tsx'

type Props<T> = {
    /**Выбранный вариант*/
    selected: Option<T>
    /**Варианты выбора*/
    options: Option<T>[]
    /**Заполнитель*/
    placeholder?: string
    /**Обработка нажатия*/
    onClick?: (value: Option<T>['value']) => void
}

/**
 * Выпадающий список
 */
function SelectGeneric<T extends number>({
    selected,
    options,
    placeholder,
    onClick
}: Props<T>) {
    const selectRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)

    /**Обработка закрытия выпадающего списка по клику вне списка*/
    const handleClickOutside = (event: MouseEvent) => {
        const { target } = event
        if (target instanceof Node && !selectRef.current?.contains(target))
            setIsOpen(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [handleClickOutside])

    /**Обработка выбора варианта из выпадающего списка*/
    const handleOptionClick = (value: Option<T>['value']) => {
        setIsOpen(false)
        onClick?.(value)
    }

    /**Обработка нажатия на выпадающий список*/
    const handleOptionsClick = (event: React.MouseEvent<HTMLUListElement>) => {
        event.stopPropagation()
    }

    /**Обработка открытия списка вариантов*/
    const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <div
            className={styles.select}
            ref={selectRef}
        >
            <div className={styles.arrow}></div>

            <div
                className={styles.placeholder}
                onClick={handlePlaceHolderClick}
                role={'button'}
            >
                {selected?.name || placeholder}
            </div>
            {isOpen && (
                <ul
                    className={styles.options}
                    onClick={handleOptionsClick}
                >
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
}

export const Select = memo(SelectGeneric) as typeof SelectGeneric