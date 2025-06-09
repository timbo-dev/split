import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import { GlobalStyle } from './style/global'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path='/split' element={<Home/>} />
        </Routes>
    </BrowserRouter>
)
