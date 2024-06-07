export type TicketModel = {
    id: string
    number: string
    title: string
    date: Date
    creator: string
    performer: string | ''
    type: string //enum
    state: string //enum
    priority: string //enum
    description: string
}