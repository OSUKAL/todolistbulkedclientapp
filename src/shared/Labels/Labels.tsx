import { memo } from 'react'
import styles from './Labels.module.scss'
import type { TicketModel } from '../../models/Ticket/TicketModel.ts'

type Props = {
    /**Данные задачи*/
    data: TicketModel
}

/**
 * Статусы
 */
export const Labels = memo<Props>(({
    data
}) => {
    return (
        <ul className={styles.labels}>
            <li className={styles.item}>{data.priority}</li>
            <li className={styles.item}>{data.state}</li>
            <li className={styles.item}>{data.type}</li>
        </ul>
    )
})