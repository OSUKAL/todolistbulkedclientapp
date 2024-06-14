import { memo } from 'react'
import { BasePage } from '../../shared/BasePage/BasePage.tsx'
import { Container } from '../../shared/Container/Container.tsx'
import { TicketInfo } from '../../widgets/TicketInfo/TicketInfo.tsx'
import type { TicketModel } from '../../models/Ticket/TicketModel.ts'
import { TicketState } from '../../Enums/TicketState.ts'
import { TicketType } from '../../Enums/TicketType.ts'
import { TicketPriority } from '../../Enums/TicketPriority.ts'

/**
 * Страница задачи
 */
export const TicketPage = memo(() => {
    const ticket: TicketModel = {
        id: '12345',
        name: 'Сверстать экран инфо о задаче',
        number: 'РК-20240605001954',
        creator: {
            id: 'ZUVUYER',
            username: 'ZUVUYER'
        },
        performer: {
            id: 'XxX_BlackKamaro_XxX',
            username: 'XxX_BlackKamaro_XxX'
        },
        date: new Date(),
        description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',

        state: TicketState.Paused,
        type: TicketType.Research,
        priority: TicketPriority.High
    }

    return (
        <BasePage>
            <Container>
                <TicketInfo data={ticket}/>
            </Container>
        </BasePage>
    )
})