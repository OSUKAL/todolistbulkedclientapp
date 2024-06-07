import { memo, useCallback, useState } from 'react'
import { FormBase } from '../../../shared/FormBase/FormBase.tsx'
import { Input } from '../../../shared/CustomInput/CustomInput.tsx'
import { Select } from '../../../shared/CustomSelect/CustomSelect.tsx'
import styles from '../TicketForm.module.scss'
import { Button } from '../../../shared/CustomButton/CustomButton.tsx'
import { Textarea } from '../../../shared/СustomTextarea/CustomTextarea.tsx'

const priorities = [
    { title: 'Наивысший', value: '1' },
    { title: 'Высокий', value: '2' },
    { title: 'Средний', value: '3' },
    { title: 'Низкий', value: '4' }
]

const states = [
    { title: 'В работе', value: '1' },
    { title: 'Выполнена', value: '2' },
    { title: 'В тестировании', value: '3' },
    { title: 'Ревью', value: '4' },
    { title: 'Приостановлена', value: '5' }
]

const types = [
    { title: 'Тестирование', value: '1' },
    { title: 'Разработка', value: '2' },
    { title: 'Исследование', value: '3' },
    { title: 'Исправление ошибки', value: '4' }
]

type Props = {
    onClick: () => void
    priority: string //enum
    state: string //enum
    type: string //enum
}

export const EditTicketForm = memo<Props>(({
    type,
    state,
    priority,
    onClick
}) => {
    const [p, setPriority] = useState('')
    const [s, setState] = useState('')
    const [t, setType] = useState('')

    const handlePrioritySelect = useCallback((value: string) => {
        setPriority(value)
    }, [])
    const handleStateSelect = useCallback((value: string) => {
        setState(value)
    }, [])
    const handleTypeSelect = useCallback((value: string) => {
        setType(value)
    }, [])

    const selectedPriority = priorities.find((item) => item.value === p)
    const selectedState = states.find((item) => item.value === s)
    const selectedType = types.find((item) => item.value === t)

    return (
        <FormBase isInModal={true} title={'Редактирование задачи'}>
            <div className={styles.columns}>
                <div className={styles.textarea}>
                    <Textarea placeholder={'Описание задачи'}/>
                </div>
                <div className={styles.selects}>
                    <Input placeholder={'Укажите нового исполнителя'} type={'text'}/>
                    <Select
                        option={selectedState || null}
                        options={states}
                        onChange={handleStateSelect}
                        placeholder={state}
                    />
                    <Select
                        option={selectedType || null}
                        options={types}
                        onChange={handleTypeSelect}
                        placeholder={type}
                    />
                    <Select
                        option={selectedPriority || null}
                        options={priorities}
                        onChange={handlePrioritySelect}
                        placeholder={priority}
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