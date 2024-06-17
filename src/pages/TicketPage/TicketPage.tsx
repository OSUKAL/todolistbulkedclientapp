import { memo } from 'react'
import { BasePage } from '../../shared/BasePage/BasePage.tsx'
import { Container } from '../../shared/Container/Container.tsx'
import { TicketInfo } from '../../widgets/TicketInfo/TicketInfo.tsx'

/**
 * Страница задачи
 */
export const TicketPage = memo(() => {
    return (
        <BasePage>
            <Container>
                <TicketInfo/>
            </Container>
        </BasePage>
    )
})