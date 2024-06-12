import { memo } from 'react'
import { ModalBase } from '../../../../shared/ModalBase/ModalBase.tsx'
import type { TicketModel } from '../../../../models/Ticket/TicketModel.ts'
import { TicketForm } from '../../../Forms/Ticket/TicketForm.tsx'

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
            <TicketForm 
                onClick={onClick} 
                data={data}
                formHeader={'Редактирование задачи'}
            />
        </ModalBase>
    )
})