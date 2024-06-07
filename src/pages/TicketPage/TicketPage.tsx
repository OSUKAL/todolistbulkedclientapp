import { memo } from 'react'
import styles from './TicketPage.module.scss'
import { BasePage } from '../../shared/BasePage/BasePage.tsx'
import { Container } from '../../shared/Container/Container.tsx'
import { TicketInfo } from '../../widgets/TicketInfo/TicketInfo.tsx'
import { TicketModel } from '../../models/Ticket/TicketModel.ts'

export const TicketPage = memo(() => {
    const ticket: TicketModel = {
        id: '12345',
        title: 'Сверстать экран инфо о задаче',
        number: 'РК-20240605001954',
        creator: 'ZUVUYER',
        date: new Date(),
        description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
        performer: 'XxX_BlackKamaro_XxX',
        state: 'В работе',
        type: 'Разработка',
        priority: 'Наивысший'
    }

    return (
        <div className={styles.ticket}>
            <BasePage>
                <Container>
                    <TicketInfo data={ticket}/>
                </Container>
            </BasePage>
        </div>
    )
})