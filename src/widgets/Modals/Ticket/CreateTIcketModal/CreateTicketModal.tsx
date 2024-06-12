import { memo } from 'react'
import { ModalBase } from '../../../../shared/ModalBase/ModalBase.tsx'
import { TicketForm } from '../../../Forms/Ticket/TicketForm.tsx'

type Props = {
    /**Обработка нажатия*/
    onClick: () => void
}

/**
 * Модальное окно создания задачи
 */
export const CreateTicketModal = memo<Props>(({
    onClick
}) => {
    return (
        <ModalBase close={onClick}>
            <TicketForm
                onClick={onClick}
                formHeader={'Добавление задачи'}/>
        </ModalBase>
    )
})