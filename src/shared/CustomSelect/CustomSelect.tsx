import { memo, useCallback, useEffect, useRef, useState } from 'react'
import styles from './CustomSelect.module.scss'
import type { DropdownOption } from '../DropdownMenu/DropdownOption/DropdownOption.ts'
import { Option } from '../DropdownMenu/DropdownOption/DropdownOption.tsx'
import { Dropdown } from '../DropdownMenu/DropdownMenu.tsx'

type Props<T> = {
    /**Выбранный вариант*/
    selected: DropdownOption<T>
    /**Варианты выбора*/
    options: DropdownOption<T>[]
    /**Обработка нажатия*/
    onClick: (value: T) => void
    /**Количество видимых элементов выпадающего меню*/
    visibleOptions?: number
}

/**Компонент выбора варианта выпадающего списка*/
function SelectGeneric<T extends number>({
    selected,
    visibleOptions,
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
                <Dropdown 
                    visibleOptions={visibleOptions}
                    totalOptions={options.length}
                >
                    {options.map((option) => (
                        <Option<T>
                            key={option.value}
                            option={option}
                            onClick={handleOptionClick}
                        />
                    ))}
                </Dropdown>
            )}
        </div>
    )
}

export const Select = memo(SelectGeneric) as typeof SelectGeneric