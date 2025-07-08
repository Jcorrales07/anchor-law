import './styles/index.css'

import { StrictMode } from 'react'
import { Toaster } from 'react-hot-toast'
import { createRoot } from 'react-dom/client'

import Navbar from './components/layout/Navbar.tsx'
import ScrollToTop from './components/ui/ScrollToTop.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

import { HeaderHeightProvider } from './contexts/HeaderHeightContext.tsx'
import { HomePage, AboutUsPage, ServicesPage, ContactUsPage, ErrorPage } from './pages'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HeaderHeightProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/nosotros' element={<AboutUsPage />} />
          <Route path='/servicios' element={<ServicesPage />} />
          <Route path='/contactanos' element={<ContactUsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Toaster />
      </HeaderHeightProvider>
    </BrowserRouter>
  </StrictMode>,
)