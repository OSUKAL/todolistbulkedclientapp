import { memo, MouseEventHandler, useEffect, useRef, useState } from 'react'
import styles from './CustomSelect.module.scss'
import { Option } from './SelectOption/SelectOption.tsx'

type Props = {
    option: Option | null
    options: Option[]
    placeholder?: string
    mode?: 'rows' | 'cells'
    status?: 'default' | 'invalid'
    onChange?: (selected: Option['value']) => void
}

export const Select = memo<Props>(({
    option,
    options,
    placeholder,
    mode = 'rows',
    status = 'default',
    onChange,
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
    
    const handleOptionClick = (value: Option['value']) => {
        setIsOpen(false)
        onChange?.(value)
    }
    const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen((prev) => !prev)
    }
    
    return (
        <div
            className={styles.select}
            ref={rootRef}
            data-is-active={isOpen}
            data-mode={mode}
        >
            <div className={styles.arrow}></div>

            <div
                className={styles.placeholder}
                ref={placeholderRef}
                data-status={status}
                data-selected={!!option?.value}
                onClick={handlePlaceHolderClick}
                role={'button'}
                tabIndex={0}
            >
                {option?.title || placeholder}
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


