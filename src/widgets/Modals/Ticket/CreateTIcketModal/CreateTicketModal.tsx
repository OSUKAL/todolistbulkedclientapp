import { memo } from 'react'
import { ModalBase } from '../../../../shared/ModalBase/ModalBase.tsx'
import { CreateTicketForm } from '../../../Ticket/CreateTicketForm/CreateTicketForm.tsx'

type Props = {
    onClick: () => void
}

export const CreateTicketModal = memo<Props>(({
    onClick
}) => {
    return (
        <ModalBase>
            <CreateTicketForm
                onClick={onClick}
            />
        </ModalBase>
    )
})