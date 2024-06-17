import { TicketType } from '../../Enums/TicketType.ts'
import { TicketPriority } from '../../Enums/TicketPriority.ts'

/**Модель добавления задачи*/
export type CreateTicketModel = {
    /**Название*/
    name: string,
    /**Тип*/
    type: TicketType,
    /**Идентификатор исполнителя*/
    performerId?: string,
    /**Приоритет*/
    priority: TicketPriority,
    /**Описание*/
    description: string
}