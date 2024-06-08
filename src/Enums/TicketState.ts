/**Состояние задачи*/
export enum TicketState {
    /**В работе*/
    InProgress = 1,
    /**Выполнена*/
    Done = 2,
    /**В тестировании*/
    Testing = 3,
    /**Ревью*/
    Review = 4,
    /**Приостановлена*/
    Paused = 5
}