import { memo, useCallback, useState } from 'react'
import { FormBase } from '../../../shared/FormBase/FormBase.tsx'
import { Input } from '../../../shared/CustomInput/CustomInput.tsx'
import { Select } from '../../../shared/CustomSelect/CustomSelect.tsx'
import styles from '../TicketForm.module.scss'
import { Button } from '../../../shared/CustomButton/CustomButton.tsx'
import { Textarea } from '../../../shared/СustomTextarea/CustomTextarea.tsx'

const priorities = [
    { name: 'Наивысший', value: '1' },
    { name: 'Высокий', value: '2' },
    { name: 'Средний', value: '3' },
    { name: 'Низкий', value: '4' }
]

const states = [
    { name: 'В работе', value: '1' },
    { name: 'Выполнена', value: '2' },
    { name: 'В тестировании', value: '3' },
    { name: 'Ревью', value: '4' },
    { name: 'Приостановлена', value: '5' }
]

const types = [
    { name: 'Тестирование', value: '1' },
    { name: 'Разработка', value: '2' },
    { name: 'Исследование', value: '3' },
    { name: 'Исправление ошибки', value: '4' }
]

type Props = {
    /**Обработка нажатия*/
    onClick: () => void
}

/**
 * Форма создания задачи
 */
export const CreateTicketForm = memo<Props>(({
    onClick
}) => {
    const [priority, setPriority] = useState('')
    const [state, setState] = useState('')
    const [type, setType] = useState('')

    const handlePrioritySelect = useCallback((value: string) => {
        setPriority(value)
    }, [])
    const handleStateSelect = useCallback((value: string) => {
        setState(value)
    }, [])
    const handleTypeSelect = useCallback((value: string) => {
        setType(value)
    }, [])

    const selectedPriority = priorities.find((item) => item.value === priority)
    const selectedState = states.find((item) => item.value === state)
    const selectedType = types.find((item) => item.value === type)

    return (
        <FormBase isInModal={true} title={'Добавление задачи'}>
            <div className={styles.columns}>
                <div className={styles.textarea}>
                    <Textarea placeholder={'Укажите описание задачи'}/>
                </div>
                <div className={styles.selects}>
                    <Input placeholder={'Укажите исполнителя'} type={'text'}/>
                    <Select
                        option={selectedState || null}
                        options={states}
                        onClick={handleStateSelect}
                        placeholder={'Укажите состояние задачи'}
                    />
                    <Select
                        option={selectedType || null}
                        options={types}
                        onClick={handleTypeSelect}
                        placeholder={'Укажите тип задачи'}
                    />
                    <Select
                        option={selectedPriority || null}
                        options={priorities}
                        onClick={handlePrioritySelect}
                        placeholder={'Укажите приоритет задачи'}
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