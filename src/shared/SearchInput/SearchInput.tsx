import { memo, useCallback, useEffect, useRef, useState } from 'react'
import styles from './SearchInput.module.scss'
import { Input } from '../CustomInput/CustomInput.tsx'
import type { DropdownOption } from '../DropdownMenu/DropdownOption/DropdownOption.ts'
import { Dropdown } from '../DropdownMenu/DropdownMenu.tsx'
import { Option } from '../DropdownMenu/DropdownOption/DropdownOption.tsx'

type Props<T> = {
    /**Варианты выбора*/
    options?:DropdownOption<T>[]
    /**Количество видимых элементов выпадающего меню*/
    visibleOptions?: number
    /**Обработка нажатия на вариант из выпадающего списка*/
    onClick: (value: T) => void
    /**Заполнитель*/
    placeholder: string
}

/**Поле для ввода с выпадающим списком*/
function SearchGeneric<T extends string | number>({
    placeholder,
    onClick,
    visibleOptions,
    options
}: Props<T>) {
    const searchRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    
    /**Обработка нажатия на элемент выпадающего списка*/
    const handleOptionClick = useCallback((value: T) => {
        setIsOpen(false)
        onClick(value)
    }, [setIsOpen, onClick])

    /**Обработка нажатия вне выпадающего списка*/
    const handleClickOutside = useCallback((event: MouseEvent) => {
        const {target} = event
        if(target instanceof Node && !searchRef.current?.contains(target))
            setIsOpen(false)
    }, [setIsOpen, searchRef])

    useEffect(() => {
        if(options)
            setIsOpen(true)
        
        document.addEventListener('click', handleClickOutside)
        
        return() => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [options, setIsOpen, handleClickOutside])
    
    return(
        <div 
            className={styles.search}
            ref={searchRef}
        >
            <Input
                placeholder={placeholder}
                type={'text'}
            />

            {isOpen && (
                <Dropdown 
                    visibleOptions={visibleOptions} 
                    totalOptions={options!.length}
                >
                    {options!.map((option) => (
                        <Option
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

export const Search = memo(SearchGeneric) as typeof SearchGeneric