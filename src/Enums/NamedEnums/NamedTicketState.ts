import { TicketState } from '../TicketState.ts'

/**Именованное состояние задачи*/
export type NamedTicketState = {
    /**Название*/
    name: string
    /**Состояние*/
    value: TicketState
}