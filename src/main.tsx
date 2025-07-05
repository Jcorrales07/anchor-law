import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router'

import './styles/index.css'

import HomePage from './pages/HomePage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import AboutUsPage from './pages/AboutUsPage.tsx'
import ServicesPage from './pages/ServicesPage.tsx'
import ContactUsPage from './pages/ContactUs.tsx'
import Navbar from './components/layout/Navbar.tsx'
import { HeaderHeightProvider } from './contexts/HeaderHeightContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HeaderHeightProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/nosotros' element={<AboutUsPage />} />
          <Route path='/servicios' element={<ServicesPage />} />
          <Route path='/contactanos' element={<ContactUsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HeaderHeightProvider>
    </BrowserRouter>
  </StrictMode>,
)