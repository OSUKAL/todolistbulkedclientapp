import { memo } from 'react'
import { ModalBase } from '../../../../shared/ModalBase/ModalBase.tsx'
import { TicketForm } from '../../../Forms/Ticket/TicketForm.tsx'

type Props = {
    /**Обработка закрытия модального окна*/
    closeModal: () => void
}

/**Модальное окно создания задачи*/
export const CreateTicketModal = memo<Props>(({
    closeModal
}) => {
    return (
        <ModalBase closeModal={closeModal}>
            <TicketForm
                formType={'create'}
                closeForm={closeModal}
                formHeader={'Добавление задачи'}
                buttonName={'Создать'}
            />
        </ModalBase>
    )
})