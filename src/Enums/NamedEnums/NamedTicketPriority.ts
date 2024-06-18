import { TicketPriority } from '../TicketPriority.ts'

/**Именованный приоритет задачи*/
export type NamedTicketPriority = {
    /**Название*/
    name: string
    /**Приоритет*/
    value: TicketPriority
}