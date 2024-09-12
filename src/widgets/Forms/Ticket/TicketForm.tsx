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
import type { CreateTicketModel } from '../../../models/Ticket/CreateTicketModel.ts'
import type { EditTicketModel } from '../../../models/Ticket/EditTicketModel.ts'
import { toast } from 'sonner'
import { Search } from '../../../shared/SearchInput/SearchInput.tsx'

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
    /**Обработка закрытия формы*/
    closeForm: () => void
    /**Данные задачи*/
    data?: TicketModel
    /**Заголовок формы*/
    formHeader: string
    /**Название кнопки*/
    buttonName: string
    /**Тип формы*/
    formType: string
}

/**Форма редактирования задачи*/
export const TicketForm = memo<Props>(({
    formType,
    buttonName,
    data,
    closeForm,
    formHeader
}) => {
    const [priority, setPriority] = useState(data?.priority ?? TicketPriority.Unknown)
    const [state, setState] = useState(data?.state ?? TicketState.Unknown)
    const [type, setType] = useState(data?.type ?? TicketType.Unknown)
    const nameRef = useRef<HTMLInputElement>(null)
    const performerRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLTextAreaElement>(null)
    
    useEffect(() => {
        if (!data)
            return

        nameRef.current!.value = data.name
        performerRef.current!.value = data.performer.username
        descriptionRef.current!.value = data.description

        return () => {
        }
    }, [descriptionRef, performerRef, nameRef, data])

    /**Обработка нажатия на кнопку формы*/
    const handleButtonClick = useCallback(() => {
        if (nameRef.current!.value === '') {
            toast.warning('Название задачи не указано')
            return
        }
        if (performerRef.current!.value === '') {
            toast.warning('Исполнитель задачи не назначен')
            return
        }
        if (descriptionRef.current!.value === '') {
            toast.warning('Отсутствует описание задачи')
            return
        }
        if (formType === 'edit' && state === defaultState.value) {
            toast.warning('Состояние задачи не указано')
            return
        }
        if (type === defaultType.value) {
            toast.warning('Тип задачи не указан')
            return
        }
        if (priority === defaultPriority.value) {
            toast.warning('Приоритет задачи не указан')
            return
        }

        if (formType === 'create') {
            const ticketData: CreateTicketModel = {
                name: nameRef.current!.value,
                type: type,
                priority: priority,
                description: descriptionRef.current!.value
            }

            console.log(ticketData) //Передача объекта в метод
            closeForm()
        }

        if (formType === 'edit') {
            const ticketData: EditTicketModel = {
                id: data!.id,
                name: nameRef.current!.value,
                type: type,
                state: state,
                priority: priority,
                description: descriptionRef.current!.value
            }

            console.log(ticketData) //Передача объекта в метод
            closeForm()
        }

    }, [data, closeForm, type, formType, priority, nameRef, performerRef, descriptionRef])

    /**Обработка выбора приоритета задачи*/
    const handlePrioritySelect = useCallback((value: TicketPriority) => {
        setPriority(value)
    }, [setPriority])

    /**Обработка выбора состояния задачи*/
    const handleStateSelect = useCallback((value: TicketState) => {
        setState(value)
    }, [setState])

    /**Обработка выбора типа задачи*/
    const handleTypeSelect = useCallback((value: TicketType) => {
        setType(value)
    }, [setType])

    const selectedPriority = priorities.find((item) => item.value === priority) ?? defaultPriority
    const selectedState = states.find((item) => item.value === state) ?? defaultState
    const selectedType = types.find((item) => item.value === type) ?? defaultType

    return (
        <FormBase
            isInModal={true}
            title={formHeader}
            closeModal={closeForm}
        >
            <div className={styles.columns}>
                <div className={styles.textarea}>
                    <Textarea
                        textareaRef={descriptionRef}
                        placeholder={'Укажите описание задачи'}
                    />
                </div>
                <div className={styles.selects}>
                    <Input
                        inputRef={nameRef}
                        placeholder={'Укажите название задачи'}
                        type={'text'}
                    />
                    <Search 
                        onClick={()=>{}} 
                        placeholder={'Укажите исполнителя задачи'}
                    />
                    {formType === 'edit' && (
                        <Select<TicketState>
                            selected={selectedState}
                            options={states}
                            onClick={handleStateSelect}
                        />
                    )}
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
                        onClick={handleButtonClick}
                        title={buttonName}
                    />
                </div>
            </div>
        </FormBase>
    )
})