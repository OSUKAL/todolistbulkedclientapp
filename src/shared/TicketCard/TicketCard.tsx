import { memo, useCallback } from 'react'
import styles from './TicketCard.module.scss'
import { Labels } from '../Labels/Labels.tsx'
import type { TicketModel } from '../../models/Ticket/TicketModel.ts'

type Props = {
    /**Данные задачи*/
    data: TicketModel
    /**Обработка нажатия*/
    performerClick: (data: TicketModel) => void
}

/**
 * Карточка задачи
 */
export const TicketCard = memo<Props>(({
    data,
    performerClick
}) => {
    const handlePerformerClick = useCallback(() => {
        performerClick(data)
    }, [performerClick])
    
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.number}>{data.number}</div>
                <div title={data.name} className={styles.title}>{data.name}</div>
                <Labels data={data}/>
            </div>

            {data.performer.username !== '' && (
                <div className={styles.performer}>
                    Выполняет
                    <div
                        className={styles.text}
                        onClick={handlePerformerClick}
                    >
                        {data.performer.username}
                    </div>
                </div>
            )}
        </div>
    )
})