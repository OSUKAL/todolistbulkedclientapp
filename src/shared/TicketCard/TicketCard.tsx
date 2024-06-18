import { memo, useCallback } from 'react'
import styles from './TicketCard.module.scss'
import { Labels } from '../Labels/Labels.tsx'
import type { TicketModel } from '../../models/Ticket/TicketModel.ts'
import { useNavigate } from 'react-router-dom'

type Props = {
    /**Данные задачи*/
    data: TicketModel
    /**Обработка нажатия на исполнителя задачи*/
    onPerformerClick: (name: string) => void
}

/**Карточка задачи*/
export const TicketCard = memo<Props>(({
    data,
    onPerformerClick
}) => {
    const navigate = useNavigate()
    
    /**Обработка нажатия на исполнителя задачи*/
    const handlePerformerClick = useCallback(() => {
        onPerformerClick(data.performer.username)
    }, [onPerformerClick, data])
    
    /**Обработка нажатия на номер задачи*/
    const handleNumberClick = useCallback(() => {
        navigate(`/task?id=${data.id}`, {state: data})
    }, [navigate, data])
    
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div 
                    className={styles.number}
                    onClick={handleNumberClick}
                >
                    {data.number}
                </div>
                <div 
                    title={data.name}
                    className={styles.title}
                >
                    {data.name}
                </div>
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