import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router'

import './styles/index.css'
import App from './App.tsx'
import ErrorPage from './pages/ErrorPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path='/nosotros' element={} />  */}
        {/* <Route path='/servicios' element={} /> */}
        {/* <Route path='/contactanos' element={} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
