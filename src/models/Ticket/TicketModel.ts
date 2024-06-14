import { TicketType } from '../../Enums/TicketType.ts'
import { TicketState } from '../../Enums/TicketState.ts'
import { TicketPriority } from '../../Enums/TicketPriority.ts'
import type { TicketUserModel } from './TicketUserModel.ts'

/**Модель задачи*/
export type TicketModel = {
    /**Идентификатор*/
    id: string
    /**Номер*/
    number: string
    /**Название*/
    name: string
    /**Дата создания*/
    date: Date
    /**Данные создателя*/
    creatorData: TicketUserModel
    /**Данные исполнителя*/
    performerData: TicketUserModel
    /**Тип*/
    type: TicketType
    /**Состояние*/
    state: TicketState
    /**Приоритет*/
    priority: TicketPriority
    /**Описание*/
    description: string
}