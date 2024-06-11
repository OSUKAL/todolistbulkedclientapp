import { memo, useCallback, useState } from 'react'
import { FormBase } from '../../../../shared/FormBase/FormBase.tsx'
import { Input } from '../../../../shared/CustomInput/CustomInput.tsx'
import { Select } from '../../../../shared/CustomSelect/CustomSelect.tsx'
import styles from '../TicketForm.module.scss'
import { Button } from '../../../../shared/CustomButton/CustomButton.tsx'
import { Textarea } from '../../../../shared/СustomTextarea/CustomTextarea.tsx'
import { PriorityName } from '../../Models/PriorityName.ts'
import { TicketPriority } from '../../../../Enums/TicketPriority.ts'
import { StateName } from '../../Models/StateName.ts'
import { TicketState } from '../../../../Enums/TicketState.ts'
import { TypeName } from '../../Models/TypeName.ts'
import { TicketType } from '../../../../Enums/TicketType.ts'
import { TicketModel } from '../../../../models/Ticket/TicketModel.ts'

const priorities :PriorityName[] = [
    { name: 'Наивысший', value: TicketPriority.Top },
    { name: 'Высокий', value: TicketPriority.High },
    { name: 'Средний', value: TicketPriority.Mid },
    { name: 'Низкий', value: TicketPriority.Low }
]

const states: StateName[] = [
    { name: 'В работе', value: TicketState.InProgress },
    { name: 'Выполнена', value: TicketState.Done },
    { name: 'В тестировании', value: TicketState.Testing },
    { name: 'Ревью', value: TicketState.Review },
    { name: 'Приостановлена', value: TicketState.Paused }
]

const types :TypeName[] = [
    { name: 'Тестирование', value: TicketType.Test },
    { name: 'Разработка', value: TicketType.Development },
    { name: 'Исследование', value: TicketType.Research },
    { name: 'Исправление ошибки', value: TicketType.Fix }
]

const defaultType: TypeName = {
    name: 'Укажите тип задачи', value: TicketType.Unknown
}
const defaultState: StateName = {
    name: 'Укажите состояние задачи', value: TicketState.Unknown
}
const defaultPriority: PriorityName = {
    name: 'Укажите приоритет задачи', value: TicketPriority.Unknown
}

type Props = {
    /**Обработка нажатия*/
    onClick: () => void
    
    data?:TicketModel
}

/**
 * Форма создания задачи
 */
export const CreateTicketForm = memo<Props>(({
    onClick
}) => {
    const [priority, setPriority] = useState(TicketPriority.Unknown)
    const [state, setState] = useState(TicketState.Unknown)
    const [type, setType] = useState(TicketType.Unknown)

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
        <FormBase isInModal={true} title={'Добавление задачи'}>
            <div className={styles.columns}>
                <div className={styles.textarea}>
                    <Textarea placeholder={'Укажите описание задачи'}/>
                </div>
                <div className={styles.selects}>
                    <Input placeholder={'Укажите исполнителя'} type={'text'}/>
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
                        title={'Создать'}
                    />
                </div>
            </div>
        </FormBase>
    )
})