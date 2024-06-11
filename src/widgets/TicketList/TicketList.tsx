import { memo, useState } from 'react'
import styles from './TicketList.module.scss'
import { TicketCard } from '../../shared/TicketCard/TicketCard.tsx'
import type { TicketModel } from '../../models/Ticket/TicketModel.ts'
import { Button } from '../../shared/CustomButton/CustomButton.tsx'
import { Input } from '../../shared/CustomInput/CustomInput.tsx'
import { CreateTicketModal } from '../Modals/Ticket/CreateTIcketModal/CreateTicketModal.tsx'

type Props = {
    /**Список данных задач*/
    data: TicketModel[]
}

/**Список задач*/
export const TicketList = memo<Props>(({
    data
}) => {
    const [isModalOpen, setModalOpen] = useState(false)

    /**Обработка состояния модального окна*/
    const handleModalToggle = () => {
        setModalOpen((prev) => !prev)
    }
    
    return (
        <div className={styles.base}>
            <div className={styles.header}>
                <div className={styles.title}>Все задачи</div>
                <Button 
                    onClick={handleModalToggle}
                    title={'Создать задачу'}
                />
            </div>
            <div className={styles.search}>
                <div className={styles.item}>
                    <Input placeholder={'Поиск по создателю, исполнителю, задаче'} type={''}/>
                </div>
                <Button onClick={() => {}} title={'Сброс'}/>
            </div>
            <div className={styles.scroll}>
                <div className={styles.list}>
                    {data.map((item) => (
                        <TicketCard
                            key={item.id}
                            data={item}
                        />
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <CreateTicketModal
                    onClick={handleModalToggle}
                />
            )}
        </div>
    )
})