import { memo } from 'react'
import { ModalBase } from '../../../../shared/ModalBase/ModalBase.tsx'
import type { TicketModel } from '../../../../models/Ticket/TicketModel.ts'
import { TicketForm } from '../../../Forms/Ticket/TicketForm.tsx'

type Props = {
    /**Обработка закрытия модального окна*/
    closeModal: () => void
    /**Данные задачи*/
    data: TicketModel
}

/**Модальное окно редактирования задачи*/
export const EditTicketModal = memo<Props>(({
    data,
    closeModal
}) => {
    return (
        <ModalBase closeModal={closeModal}>
            <TicketForm
                formType={'edit'}
                onClick={closeModal} 
                data={data}
                formHeader={'Редактирование задачи'}
                buttonName={'Подтвердить'}
            />
        </ModalBase>
    )
})