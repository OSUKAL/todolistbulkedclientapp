import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { FormBase } from '../../../shared/FormBase/FormBase.tsx'
import { Input } from '../../../shared/CustomInput/CustomInput.tsx'
import { Select } from '../../../shared/CustomSelect/CustomSelect.tsx'
import styles from './TicketForm.module.scss'
import { Button } from '../../../shared/CustomButton/CustomButton.tsx'
import { Textarea } from '../../../shared/СustomTextarea/CustomTextarea.tsx'
import type { TicketModel } from '../../../models/Ticket/TicketModel.ts'
import { TicketPriority } from '../../../Enums/TicketPriority.ts'
import { TicketState } from '../../../Enums/TicketState.ts'
import { TicketType } from '../../../Enums/TicketType.ts'
import type { NamedTicketPriority } from '../../../Enums/NamedEnums/NamedTicketPriority.ts'
import type { NamedTicketState } from '../../../Enums/NamedEnums/NamedTicketState.ts'
import type { NamedTicketType } from '../../../Enums/NamedEnums/NamedTicketType.ts'

const priorities: NamedTicketPriority[] = [
    { name: 'Наивысший', value: TicketPriority.Top },
    { name: 'Высокий', value: TicketPriority.High },
    { name: 'Средний', value: TicketPriority.Mid },
    { name: 'Низкий', value: TicketPriority.Low }
]

const states: NamedTicketState[] = [
    { name: 'В работе', value: TicketState.InProgress },
    { name: 'Выполнена', value: TicketState.Done },
    { name: 'В тестировании', value: TicketState.Testing },
    { name: 'Ревью', value: TicketState.Review },
    { name: 'Приостановлена', value: TicketState.Paused }
]

const types: NamedTicketType[] = [
    { name: 'Тестирование', value: TicketType.Test },
    { name: 'Разработка', value: TicketType.Development },
    { name: 'Исследование', value: TicketType.Research },
    { name: 'Исправление ошибки', value: TicketType.Fix }
]

const defaultType: NamedTicketType = {
    name: 'Укажите тип задачи', value: TicketType.Unknown
}
const defaultState: NamedTicketState = {
    name: 'Укажите состояние задачи', value: TicketState.Unknown
}
const defaultPriority: NamedTicketPriority = {
    name: 'Укажите приоритет задачи', value: TicketPriority.Unknown
}

type Props = {
    /**Обработка нажатия*/
    onClick: () => void
    /**Данные задачи*/
    data?: TicketModel
    /**Заголовок формы*/
    formHeader: string
    /**Название кнопки*/
    buttonName: string
}

/**
 * Форма редактирования задачи
 */
export const TicketForm = memo<Props>(({
    buttonName,
    data,
    onClick,
    formHeader
}) => {
    const [priority, setPriority] = useState(data?.priority ?? TicketPriority.Unknown)
    const [state, setState] = useState(data?.state ?? TicketState.Unknown)
    const [type, setType] = useState(data?.type ?? TicketType.Unknown)
    const performerRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if(data === undefined || performerRef.current === null || descriptionRef.current === null)
            return 
        
        performerRef.current.value = data.performer.username
        descriptionRef.current.value = data.description
        
        return () => {} //Возможно, чего-то нехватает
    }, [descriptionRef, performerRef])
    
    /**Обработка нажатия на кнопку формы*/
    const handleButtonClick = useCallback(() => {
        if(performerRef.current === null || performerRef.current.value === ''){
            console.log('Исполнитель задачи не назначен')
            return
        }
        if(descriptionRef.current === null || descriptionRef.current.value === ''){
            console.log('Отсутствует описание задачи')
            return
        }
        
        const ticketData: TicketModel = {
            
        }
        
    }, [onClick, performerRef, descriptionRef])

    /**Обработка выбора приоритета задачи*/
    const handlePrioritySelect = useCallback((value: TicketPriority) => {
        setPriority(value)
    }, [])
    
    /**Обработка выбора состояния задачи*/
    const handleStateSelect = useCallback((value: TicketState) => {
        setState(value)
    }, [])
    
    /**Обработка выбора типа задачи*/
    const handleTypeSelect = useCallback((value: TicketType) => {
        setType(value)
    }, [])

    const selectedPriority = priorities.find((item) => item.value === priority) ?? defaultPriority
    const selectedState = states.find((item) => item.value === state) ?? defaultState
    const selectedType = types.find((item) => item.value === type) ?? defaultType

    return (
        <FormBase
            isInModal={true}
            title={formHeader}
        >
            <div className={styles.columns}>
                <div className={styles.textarea}>
                    <Textarea 
                        textareaRef={descriptionRef}
                        placeholder={'Описание задачи'}
                    />
                </div>
                <div className={styles.selects}>
                    <Input 
                        inputRef={performerRef}
                        onChange={() => {}}
                        placeholder={'Укажите исполнителя'}
                        type={'text'}
                    />
                    <Select<TicketState>
                        selected={selectedState}
                        options={states}
                        onClick={handleStateSelect}
                    />
                    <Select<TicketType>
                        selected={selectedType}
                        options={types}
                        onClick={handleTypeSelect}
                    />
                    <Select<TicketPriority>
                        selected={selectedPriority}
                        options={priorities}
                        onClick={handlePrioritySelect}
                    />
                    <Button
                        onClick={onClick}
                        title={buttonName}
                    />
                </div>
            </div>
        </FormBase>
    )
})