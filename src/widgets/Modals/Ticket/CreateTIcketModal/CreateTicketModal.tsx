import { memo } from 'react'
import { ModalBase } from '../../../../shared/ModalBase/ModalBase.tsx'
import { CreateTicketForm } from '../../../Forms/Ticket/CreateTicketForm/CreateTicketForm.tsx'
import { TicketModel } from '../../../../models/Ticket/TicketModel.ts'

type Props = {
    /**Обработка нажатия*/
    onClick: () => void
    
    data?:TicketModel
}

/**
 * Модальное окно создания задачи
 */
export const CreateTicketModal = memo<Props>(({
    onClick
}) => {
    return (
        <ModalBase close={onClick}>
            <CreateTicketForm
                onClick={onClick}
            />
        </ModalBase>
    )
})