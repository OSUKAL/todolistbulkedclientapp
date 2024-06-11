import { memo } from 'react'
import { ModalBase } from '../../../../shared/ModalBase/ModalBase.tsx'
import type { TicketModel } from '../../../../models/Ticket/TicketModel.ts'
import { EditTicketForm } from '../../../Forms/Ticket/EditTicketForm/EditTicketForm.tsx'

type Props = {
    /**Обработка нажатия*/
    onClick: () => void
    /**Данные задачи*/
    data: TicketModel
}

/**
 * Модальное окно редактирования задачи
 */
export const EditTicketModal = memo<Props>(({
    data,
    onClick
}) => {
    return (
        <ModalBase close={onClick}>
            <EditTicketForm 
                onClick={onClick} 
                data={data}
            />
        </ModalBase>
    )
})