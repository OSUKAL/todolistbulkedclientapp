import { memo } from 'react'
import styles from './MainPage.module.scss'
import { BasePage } from '../../shared/BasePage/BasePage.tsx'
import { TicketList } from '../../widgets/TicketList/TicketList.tsx'
import { TicketModel } from '../../models/Ticket/TicketModel.ts'

export const MainPage = memo(() => {
    const tickets: TicketModel[] = [
        {
            id: '1',
            title: 'Сверстать экран',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: '',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Наивысший'
        },
        {
            id: '2',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'Приостановлена',
            type: 'Разработка',
            priority: 'Низкий'
        },
        {
            id: '3',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Тестирование',
            priority: 'Высокий'
        },
        {
            id: '4',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Исследование',
            priority: 'Средний'
        },
        {
            id: '5',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В тестировании',
            type: 'Разработка',
            priority: 'Средний'
        },
        {
            id: '6',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Низкий'
        },
        {
            id: '7',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Средний'
        },
        {
            id: '8',
            title: 'Сверстать ',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В тестировании',
            type: 'Исправление ошибки',
            priority: 'Наивысший'
        },
        {
            id: '1',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: '',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Наивысший'
        },
        {
            id: '2',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'Приостановлена',
            type: 'Разработка',
            priority: 'Низкий'
        },
        {
            id: '3',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Тестирование',
            priority: 'Высокий'
        },
        {
            id: '4',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Исследование',
            priority: 'Средний'
        },
        {
            id: '5',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В тестировании',
            type: 'Разработка',
            priority: 'Средний'
        },
        {
            id: '6',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Низкий'
        },
        {
            id: '7',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Средний'
        },
        {
            id: '8',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В тестировании',
            type: 'Исправление ошибки',
            priority: 'Наивысший'
        },
        {
            id: '1',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: '',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Наивысший'
        },
        {
            id: '2',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'Приостановлена',
            type: 'Разработка',
            priority: 'Низкий'
        },
        {
            id: '3',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Тестирование',
            priority: 'Высокий'
        },
        {
            id: '4',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Исследование',
            priority: 'Средний'
        },
        {
            id: '5',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В тестировании',
            type: 'Разработка',
            priority: 'Средний'
        },
        {
            id: '6',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Низкий'
        },
        {
            id: '7',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Средний'
        },
        {
            id: '8',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В тестировании',
            type: 'Исправление ошибки',
            priority: 'Наивысший'
        },
        {
            id: '1',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: '',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Наивысший'
        },
        {
            id: '2',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'Приостановлена',
            type: 'Разработка',
            priority: 'Низкий'
        },
        {
            id: '3',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Тестирование',
            priority: 'Высокий'
        },
        {
            id: '4',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Исследование',
            priority: 'Средний'
        },
        {
            id: '5',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В тестировании',
            type: 'Разработка',
            priority: 'Средний'
        },
        {
            id: '6',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Низкий'
        },
        {
            id: '7',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Средний'
        },
        {
            id: '7',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Средний'
        },{
            id: '7',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Средний'
        },{
            id: '7',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Средний'
        },{
            id: '7',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Средний'
        },{
            id: '7',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Средний'
        },{
            id: '7',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В работе',
            type: 'Разработка',
            priority: 'Средний'
        },
        {
            id: '8',
            title: 'Сверстать экран инфо о задаче',
            number: 'РК-20240605001954',
            creator: 'ZUVUYER',
            date: new Date(),
            description: 'Верстаем экран задачи с функционалом изменения исполнителя, состояния, типа, приоритета и описания.',
            performer: 'XxX_BlackKamaro_XxX',
            state: 'В тестировании',
            type: 'Исправление ошибки',
            priority: 'Наивысший'
        }
    ]

    return (
        <div className={styles.main}>
            <BasePage>
                <TicketList data={tickets}/>
            </BasePage>
        </div>
    )
})