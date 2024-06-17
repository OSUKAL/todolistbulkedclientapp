import { memo, useCallback } from 'react'
import styles from './TicketCard.module.scss'
import { Labels } from '../Labels/Labels.tsx'
import type { TicketModel } from '../../models/Ticket/TicketModel.ts'
import { useNavigate } from 'react-router-dom'

type Props = {
    /**Данные задачи*/
    data: TicketModel
    /**Обработка нажатия на исполнителя задачи*/
    performerClick: (name: string) => void
}

/**
 * Карточка задачи
 */
export const TicketCard = memo<Props>(({
    data,
    performerClick
}) => {
    const navigateToTask = useNavigate()
    
    /**Обработка нажатия на исполнителя задачи*/
    const handlePerformerClick = useCallback(() => {
        performerClick(data.performer.username)
    }, [performerClick])
    
    /**Обработка нажатия на номер задачи*/
    const handleNumberClick = useCallback(() => {
        navigateToTask(`/task?id=${data.id}`, {state: data})
    }, [navigateToTask])
    
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div 
                    className={styles.number}
                    onClick={handleNumberClick}
                >
                    {data.number}
                </div>
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