import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import styles from './CustomSelect.module.scss'
import { SelectOption } from './CustomOption/SelectOption.ts'
import { Option } from './CustomOption/CustomOption.tsx'


type Props<T> = {
    /**Выбранный вариант*/
    selected: SelectOption<T>
    /**Варианты выбора*/
    options: SelectOption<T>[]
    /**Обработка нажатия*/
    onClick: (value: T) => void
}

/**Выпадающий список*/
function SelectGeneric<T extends number>({
    selected,
    options,
    onClick
}: Props<T>) {
    const selectRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)

    /**Обработка закрытия выпадающего списка по клику вне списка*/
    const handleClickOutside = useCallback ((event: MouseEvent) => {
        const { target } = event
        if (target instanceof Node && !selectRef.current?.contains(target))
            setIsOpen(false)
    }, [setIsOpen, selectRef])

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [handleClickOutside])

    /**Обработка выбора варианта из выпадающего списка*/
    const handleOptionClick = useCallback((value: T) => {
        setIsOpen(false)
        onClick(value)
    }, [onClick, setIsOpen])

    /**Обработка нажатия на выпадающий список*/
    const handleOptionsClick = useCallback((event: React.MouseEvent<HTMLUListElement>) => {
        event.stopPropagation()
    }, [])

    /**Обработка открытия выпадающего списка*/
    const handlePlaceHolderClick = useCallback(() => {
        setIsOpen((prev) => !prev)
    },[setIsOpen])

    return (
        <div
            className={styles.select}
            ref={selectRef}
        >
            <div className={styles.arrow}/>
            
            <div
                className={styles.placeholder}
                onClick={handlePlaceHolderClick}
                role={'button'}
            >
                {selected.name}
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