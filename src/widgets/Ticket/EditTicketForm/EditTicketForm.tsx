import { memo, useCallback, useState } from 'react'
import { FormBase } from '../../../shared/FormBase/FormBase.tsx'
import { Input } from '../../../shared/CustomInput/CustomInput.tsx'
import { Select } from '../../../shared/CustomSelect/CustomSelect.tsx'
import styles from '../TicketForm.module.scss'
import { Button } from '../../../shared/CustomButton/CustomButton.tsx'
import { Textarea } from '../../../shared/СustomTextarea/CustomTextarea.tsx'
import type { TicketModel } from '../../../models/Ticket/TicketModel.ts'
import { PriorityName } from '../Models/PriorityName.ts'
import { TicketPriority } from '../../../Enums/TicketPriority.ts'
import { StateName } from '../Models/StateName.ts'
import { TicketState } from '../../../Enums/TicketState.ts'
import { TypeName } from '../Models/TypeName.ts'
import { TicketType } from '../../../Enums/TicketType.ts'

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

type Props = {
    /**Обработка нажатия*/
    onClick: () => void
    /**Данные задачи*/
    data: TicketModel
}

/**
 * Форма редактирования задачи
 */
export const EditTicketForm = memo<Props>(({
    data,
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

    // const [priority, setPriority] = useState(TicketPriority.Unknown)
    // const [state, setState] = useState(TicketState.Unknown)
    // const [type, setType] = useState(TicketType.Unknown)
    //
    // const handlePrioritySelect = useCallback((value: TicketPriority) => {
    //     setPriority(value)
    // }, [])
    // const handleStateSelect = useCallback((value: TicketState) => {
    //     setState(value)
    // }, [])
    // const handleTypeSelect = useCallback((value: TicketType) => {
    //     setType(value)
    // }, [])

    const selectedPriority = priorities.find((item) => item.value === priority)
    const selectedState = states.find((item) => item.value === state)
    const selectedType = types.find((item) => item.value === type)

    return (
        <FormBase isInModal={true} title={'Редактирование задачи'}>
            <div className={styles.columns}>
                <div className={styles.textarea}>
                    <Textarea placeholder={'Описание задачи'}/>
                </div>
                <div className={styles.selects}>
                    <Input placeholder={'Укажите нового исполнителя'} type={'text'}/>
                    <Select<PriorityName>
                        option={selectedState!}
                        options={states}
                        onClick={handleStateSelect}
                        placeholder={data.state.toString()}
                    />
                    <Select
                        option={selectedType!}
                        options={types}
                        onClick={handleTypeSelect}
                        placeholder={data.type.toString()}
                    />
                    <Select
                        option={selectedPriority!}
                        options={priorities}
                        onClick={handlePrioritySelect}
                        placeholder={data.priority.toString()}
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