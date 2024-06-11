import { memo, useState } from 'react'
import styles from './TicketInfo.module.scss'
import type { TicketModel } from '../../models/Ticket/TicketModel.ts'
import { Button } from '../../shared/CustomButton/CustomButton.tsx'
import {EditTicketModal} from '../Modals/Ticket/EditTicketModal/EditTicketModal.tsx'
import { Labels } from '../../shared/Labels/Labels.tsx'

type Props = {
    /**Данные задачи*/
    data: TicketModel
}

/**
 * Информация о задаче
 */
export const TicketInfo = memo<Props>(({
    data
}) => {
    const[isModalOpen, setModalOpen] = useState(false)

    /**Обработка состояния модального окна*/
    const handleModalToggle = () => {
        setModalOpen((prev) => !prev)
    }
    
    return (
        <div className={styles.info}>
            <div className={styles.header}>
                <div className={styles.creation}>
                    <div className={styles.item}>{data.number}</div>
                    <div className={styles.item}>{data.date.toLocaleDateString()}</div>
                    <div className={styles.item}>
                        <div className={styles.text}>Задачу добавил</div>
                        {data.creator.username}
                    </div>
                    {data.performer.username !== '' && (
                        <div className={styles.item}>
                            <div className={styles.text}>Выполняет</div>
                            {data.performer.username}
                        </div>
                    )}
                </div>
                <div className={styles.title}>{data.name}</div>
                <Labels data={data}/>
            </div>

            <div className={styles.description}>
                {data.description}
            </div>

            <div className={styles.edit}>
                <Button
                    onClick={handleModalToggle}
                    title={'Редактировать'}
                />
            </div>

            {isModalOpen && (
                <EditTicketModal
                    onClick={handleModalToggle}
                    data={data}
                />
            )}
        </div>
    )
})