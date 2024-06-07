import { memo } from 'react'
import styles from './Labels.module.scss'
import { TicketModel } from '../../models/Ticket/TicketModel.ts'

type Props = {
    data: TicketModel
}

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