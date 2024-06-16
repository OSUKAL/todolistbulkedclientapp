import { memo } from 'react'
import { BasePage } from '../../shared/BasePage/BasePage.tsx'
import { TicketList } from '../../widgets/TicketList/TicketList.tsx'
import type { TicketModel } from '../../models/Ticket/TicketModel.ts'
import { TicketState } from '../../Enums/TicketState.ts'
import { TicketType } from '../../Enums/TicketType.ts'
import { TicketPriority } from '../../Enums/TicketPriority.ts'

/**
 * Страница списка задач
 */
export const MainPage = memo(() => {
    const tickets: TicketModel[] = [
        {
            id: '1',
            name: 'Сверстать экранd safas dfsadfsadasdasda asdasdasd asdasda adadasdawdac adasdasdafg dfsdf',
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
            state: TicketState.InProgress,
            type: TicketType.Development,
            priority: TicketPriority.High
        }
    ]

    return (
        <BasePage>
            <TicketList data={tickets}/>
        </BasePage>
    )
})