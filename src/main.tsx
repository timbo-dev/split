import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Error404 from './pages/404'
import Home from './pages/Home'
import { GlobalStyle } from './style/global'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<Error404/>} />
        </Routes>
    </BrowserRouter>
)
