import { memo } from 'react'
import styles from './TicketCard.module.scss'
import { Labels } from '../Labels/Labels.tsx'
import { TicketModel } from '../../models/Ticket/TicketModel.ts'

type Props = {
    data: TicketModel
}

export const TicketCard = memo<Props>(({
    data
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.number}>{data.number}</div>
                <div className={styles.title}>{data.title}</div>
                <Labels data={data}/>
            </div>

            {data.performer != '' && (
                <div className={styles.performer}>
                    Выполняет
                    <div className={styles.text}>{data.performer}</div>
                </div>
            )}
        </div>
    )
})