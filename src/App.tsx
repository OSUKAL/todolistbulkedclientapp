import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage/AuthPage.tsx'
import { TicketPage } from './pages/TicketPage/TicketPage.tsx'
import { MainPage } from './pages/MainPage/MainPage.tsx'
import { Toaster } from 'sonner'

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path={'*'}
                        element={<Navigate replace to={'/main'}/>}
                    />
                    <Route
                        path={'/auth'}
                        element={<AuthPage/>}
                    />
                    <Route
                        path={'/main'}
                        element={<MainPage/>}
                    />
                    <Route
                        path={'/task'}
                        element={<TicketPage/>}
                    />
                </Routes>
            </BrowserRouter>
            <Toaster
                toastOptions={{
                    style: {
                        padding: '2rem',
                    }
                }}
                richColors
                
            />
        </>
    )
}
