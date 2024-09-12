import { TicketType } from '../TicketType.ts'

/**Именованный тип задачи*/
export type NamedTicketType = {
    /**Название*/
    name: string
    /**Тип*/
    value: TicketType
}