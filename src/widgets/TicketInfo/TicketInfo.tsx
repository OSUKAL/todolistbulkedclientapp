import { memo, useCallback, useState } from 'react'
import styles from './TicketInfo.module.scss'
import { Button } from '../../shared/CustomButton/CustomButton.tsx'
import { EditTicketModal } from '../Modals/Ticket/EditTicketModal/EditTicketModal.tsx'
import { Labels } from '../../shared/Labels/Labels.tsx'
import { useLocation, useNavigate } from 'react-router-dom'

/**Информация о задаче*/
export const TicketInfo = memo(() => {
    const [isModalOpen, setModalOpen] = useState(false)
    const navigateToMainSearch = useNavigate()
    const location = useLocation()
    
    const ticket = location.state

    /**Обработка нажатия на создателя задачи*/
    const handleCreatorClick = useCallback(() => {
        navigateToMainSearch(`/main?creator=${ticket.creator.username}`)
    }, [navigateToMainSearch, ticket])

    /**Обработка нажатия на исполнителя задачи*/
    const handlePerformerClick = useCallback(() => {
        navigateToMainSearch(`/main?performer=${ticket.performer.username}`)
    }, [navigateToMainSearch, ticket])
    
    /**Обработка состояния модального окна*/
    const handleModalToggle = useCallback(() => {
        setModalOpen((prev) => !prev)
    }, [setModalOpen])
    
    return (
        <div className={styles.info}>
            <div className={styles.header}>
                <div className={styles.creation}>
                    <div className={styles.item}>{ticket.number}</div>
                    <div className={styles.item}>{ticket.creationDate.toLocaleDateString()}</div>
                    <div className={styles.item}>
                        <div className={styles.text}>Задачу добавил</div>
                        <div onClick={handleCreatorClick} className={styles.link}>{ticket.creator.username}</div>
                    </div>
                    {ticket.performer.username !== '' && (
                        <div className={styles.item}>
                            <div className={styles.text}>Выполняет</div>
                            <div onClick={handlePerformerClick} className={styles.link}>{ticket.performer.username}</div>
                        </div>
                    )}
                </div>
                <div className={styles.title}>{ticket.name}</div>
                <Labels data={location.state}/>
            </div>

            <div className={styles.description}>
                {ticket.description}
            </div>

            <div className={styles.edit}>
                <Button
                    onClick={handleModalToggle}
                    title={'Редактировать'}
                />
            </div>

            {isModalOpen && (
                <EditTicketModal
                    closeModal={handleModalToggle}
                    data={ticket}
                />
            )}
        </div>
    )
})