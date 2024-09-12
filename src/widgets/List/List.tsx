import React, { memo, useCallback, useEffect, useState } from 'react'
import styles from './List.module.scss'
import { TicketCard } from '../../shared/TicketCard/TicketCard.tsx'
import { Button } from '../../shared/CustomButton/CustomButton.tsx'
import { Input } from '../../shared/CustomInput/CustomInput.tsx'
import { CreateTicketModal } from '../Modals/Ticket/CreateTIcketModal/CreateTicketModal.tsx'
import { useSearchParams } from 'react-router-dom'
import type { TicketModel } from '../../models/Ticket/TicketModel.ts'

type Props = {
    /**Список данных задач*/
    data: TicketModel[]
}

/**Компонент списка с поиском и скроллом*/
export const List = memo<Props>(({
    data
}) => {
    const [searchValue, setSearchValue] = useState('')
    const [isModalOpen, setModalOpen] = useState(false)
    const [searchParams] = useSearchParams()
    
    /**Обработка query параметров*/
    const handleSearchParams = useCallback(() => {
        const params = searchParams.get('creator') || searchParams.get('performer')
        if(params === null)
            return

        setSearchValue(params)
    }, [searchParams, setSearchValue])
    
    useEffect(() => {
        handleSearchParams()
        
        return () => {
            setSearchValue('')// Возможно, лишнее
        }
    }, [handleSearchParams, setSearchValue])
    
    /**Обработка изменения состояния модального окна*/
    const handleModalToggle = useCallback(() => {
        setModalOpen((prev) => !prev)
    }, [setModalOpen])

    /**Обработка нажатия на кнопку сброса поля ввода для поиска*/
    const handleClearClick = useCallback(() => {
        setSearchValue('')
    }, [setSearchValue])

    /**Обработка изменения поля ввода для поиска*/
    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>)=> {
        setSearchValue(event.target.value)
    },[setSearchValue])
    
    /**Обработка нажатия на исполнителя задачи*/
    const handlePerformerClick = useCallback((name: string) => {
        setSearchValue(name)
    }, [setSearchValue])
    
    return (
        <div className={styles.base}>
            <div className={styles.header}>
                <div className={styles.title}>Все задачи</div>
                <Button
                    onClick={handleModalToggle}
                    title={'Создать задачу'}
                />
            </div>
            <div className={styles.search}>
                <div className={styles.item}>
                    <Input
                        onChange={handleChange}
                        initValue={searchValue}
                        placeholder={'Поиск по создателю, исполнителю, задаче'}
                        type={'text'}
                    />
                </div>
                <Button
                    onClick={handleClearClick}
                    title={'Сброс'}
                />
            </div>
            <div className={styles.scroll}>
                <div className={styles.list}>
                    {data.map((ticket) => (
                        <TicketCard
                            onPerformerClick={handlePerformerClick}
                            key={ticket.id}
                            data={ticket}
                        />
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <CreateTicketModal
                    closeModal={handleModalToggle}
                />
            )}
        </div>
    )
})