import Footer from '../components/layout/Footer'
import LegalConsultationForm from '../components/forms/LegalConsultationForm'
import AreaServices from '../components/sections/AreaServices'

const ServicesPage: React.FC = () => {

  return (
    <>
      <AreaServices />
      <LegalConsultationForm />
      <Footer />
    </>
  )
}

export default ServicesPage