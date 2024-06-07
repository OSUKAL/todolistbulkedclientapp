import { memo, useState } from 'react'
import styles from './TicketList.module.scss'
import { TicketCard } from '../../shared/TicketCard/TicketCard.tsx'
import { TicketModel } from '../../models/Ticket/TicketModel.ts'
import { Button } from '../../shared/CustomButton/CustomButton.tsx'
import { Input } from '../../shared/CustomInput/CustomInput.tsx'
import { CreateTicketModal } from '../Modals/Ticket/CreateTIcketModal/CreateTicketModal.tsx'

type Props = {
    data: TicketModel[]
}

export const TicketList = memo<Props>(({
    data
}) => {
    const [isModalOpen, setModalOpen] = useState(false)
    
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
                    <Input placeholder={'Поиск по создателю'} type={''}/>
                </div>
                <div className={styles.item}>
                    <Input placeholder={'Поиск по исполнителю'} type={''}/>
                </div>
                <div className={styles.item}>
                    <Input placeholder={'Поиск по задаче'} type={''}/>
                </div>
                <Button title={'Все задачи'}/>
            </div>
            <div className={styles.scroll}>
                {data.map((item) => (
                    <TicketCard
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>

            {isModalOpen && (
                <CreateTicketModal 
                    onClick={handleModalToggle}
                />
            )}
        </div>

    )
})