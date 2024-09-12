import { TicketType } from '../../Enums/TicketType.ts'
import { TicketState } from '../../Enums/TicketState.ts'
import { TicketPriority } from '../../Enums/TicketPriority.ts'

/**Модель задачи с изменениями*/
export type EditTicketModel = {
    /**Идентификатор*/
    id: string,
    /**Название*/
    name: string,
    /**Тип*/
    type: TicketType,
    /**Идентификатор исполнителя*/
    performerId?: string,
    /**Состояние*/
    state: TicketState,
    /**Приоритет*/
    priority: TicketPriority,
    /**Описание*/
    description: string
}