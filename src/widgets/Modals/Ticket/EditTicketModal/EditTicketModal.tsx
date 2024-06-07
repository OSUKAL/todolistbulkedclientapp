import { memo } from 'react'
import { ModalBase } from '../../../../shared/ModalBase/ModalBase.tsx'
import { TicketModel } from '../../../../models/Ticket/TicketModel.ts'
import { EditTicketForm } from '../../../Ticket/EditTicketForm/EditTicketForm.tsx'

type Props = {
    onClick: () => void
    data: TicketModel
}

export const EditTicketModal = memo<Props>(({
    data,
    onClick
}) => {
    return (
        <ModalBase close={onClick}>
            <EditTicketForm 
                onClick={onClick} 
                priority={data.priority} 
                state={data.state} 
                type={data.type}
            />
        </ModalBase>
    )
})