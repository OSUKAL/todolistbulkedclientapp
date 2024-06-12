import { memo, useCallback, useState } from 'react'
import { FormBase } from '../../../shared/FormBase/FormBase.tsx'
import { Input } from '../../../shared/CustomInput/CustomInput.tsx'
import { Select } from '../../../shared/CustomSelect/CustomSelect.tsx'
import styles from './TicketForm.module.scss'
import { Button } from '../../../shared/CustomButton/CustomButton.tsx'
import { Textarea } from '../../../shared/СustomTextarea/CustomTextarea.tsx'
import type { TicketModel } from '../../../models/Ticket/TicketModel.ts'
import { NamedTicketPriority } from '../Models/NamedTicketPriority.ts'
import { TicketPriority } from '../../../Enums/TicketPriority.ts'
import { NamedTicketState } from '../Models/NamedTicketState.ts'
import { TicketState } from '../../../Enums/TicketState.ts'
import { NamedTicketType } from '../Models/NamedTicketType.ts'
import { TicketType } from '../../../Enums/TicketType.ts'

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
}

/**
 * Форма редактирования задачи
 */
export const TicketForm = memo<Props>(({
    data,
    onClick,
    formHeader
}) => {
    const [priority, setPriority] = useState(data?.priority ?? TicketPriority.Unknown)
    const [state, setState] = useState(data?.state ?? TicketState.Unknown)
    const [type, setType] = useState(data?.type ?? TicketType.Unknown)

    const handlePrioritySelect = useCallback((value: TicketPriority) => {
        setPriority(value)
    }, [])
    const handleStateSelect = useCallback((value: TicketState) => {
        setState(value)
    }, [])
    const handleTypeSelect = useCallback((value: TicketType) => {
        setType(value)
    }, [])

    const selectedPriority = priorities.find((item) => item.value === priority) ?? defaultPriority
    const selectedState = states.find((item) => item.value === state) ?? defaultState
    const selectedType = types.find((item) => item.value === type) ?? defaultType

    return (
        <FormBase isInModal={true} title={formHeader}>
            <div className={styles.columns}>
                <div className={styles.textarea}>
                    <Textarea initValue={data?.description} placeholder={'Описание задачи'}/>
                </div>
                <div className={styles.selects}>
                    <Input initValue={data?.performer.username} placeholder={'Укажите исполнителя'} type={'text'}/>
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
                        title={'Подтвердить'}
                    />
                </div>
            </div>
        </FormBase>
    )
})