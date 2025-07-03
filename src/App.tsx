import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Services from './components/sections/Services'
import Hero from './components/sections/Hero'
import LegalConsultationForm from './components/forms/LegalConsultationForm'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <LegalConsultationForm />
      <Footer />
    </>
  )
}

export default App
