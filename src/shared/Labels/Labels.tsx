import { memo } from 'react'
import styles from './Labels.module.scss'
import type { TicketModel } from '../../models/Ticket/TicketModel.ts'
import { TicketPriority } from '../../Enums/TicketPriority.ts'
import { TicketState } from '../../Enums/TicketState.ts'
import { TicketType } from '../../Enums/TicketType.ts'
import type { NamedTicketPriority } from '../../Enums/NamedEnums/NamedTicketPriority.ts'
import type { NamedTicketState } from '../../Enums/NamedEnums/NamedTicketState.ts'
import type { NamedTicketType } from '../../Enums/NamedEnums/NamedTicketType.ts'

type Props = {
    /**Данные задачи*/
    data: TicketModel
}

const priorities: NamedTicketPriority[] = [
    { name: 'Наивысший', value: TicketPriority.Top },
    { name: 'Высокий', value: TicketPriority.High },
    { name: 'Средний', value: TicketPriority.Mid },
    { name: 'Низкий', value: TicketPriority.Low} 
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

/**Теги задачи*/
export const Labels = memo<Props>(({
    data
}) => {
    return (
        <ul className={styles.labels}>
            <li className={styles.item}>{priorities[data.priority - 1].name}</li>
            <li className={styles.item}>{states[data.state - 1].name}</li>
            <li className={styles.item}>{types[data.type - 1].name}</li>
        </ul>
    )
})