import React, { memo, useCallback, useEffect, useState } from 'react'
import styles from './TicketList.module.scss'
import { TicketCard } from '../../shared/TicketCard/TicketCard.tsx'
import type { TicketModel } from '../../models/Ticket/TicketModel.ts'
import { Button } from '../../shared/CustomButton/CustomButton.tsx'
import { Input } from '../../shared/CustomInput/CustomInput.tsx'
import { CreateTicketModal } from '../Modals/Ticket/CreateTIcketModal/CreateTicketModal.tsx'
import { useSearchParams } from 'react-router-dom'

type Props = {
    /**Список данных задач*/
    data: TicketModel[]
}

/**Список задач*/
export const TicketList = memo<Props>(({
    data
}) => {
    const [searchValue, setSearchValue] = useState('')
    const [isModalOpen, setModalOpen] = useState(false)
    const [searchParams] = useSearchParams()
    
    const handleSearchParams = useCallback(() => {
        const params = searchParams.get('creator') || searchParams.get('performer')
        if(params === null)
            return
        
        setSearchValue(params)
    }, [])
    
    useEffect(() => {
        handleSearchParams()
        
        return () => {
            setSearchValue('')
        }
    }, [])

    /**Обработка состояния модального окна*/
    const handleModalToggle = useCallback(() => {
        setModalOpen((prev) => !prev)
    }, [setModalOpen])

    const handleClearClick = useCallback(() => {
        setSearchValue('')
    }, [setSearchValue])

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>)=> {
        setSearchValue(event.target.value)
        console.log(searchValue)
    },[searchValue, setSearchValue])
    
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
                    {data.map((item) => (
                        <TicketCard
                            key={item.id}
                            data={item}
                        />
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <CreateTicketModal
                    onClick={handleModalToggle}
                />
            )}
        </div>
    )
})