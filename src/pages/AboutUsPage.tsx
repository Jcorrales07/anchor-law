import Footer from '../components/layout/Footer'
import Introduction from '../components/sections/Introduction'
import LegalConsultationForm from '../components/forms/LegalConsultationForm'
import Team from '../components/sections/Team'

const AboutUsPage: React.FC = () => {

  return (
    <>
      <Introduction />
      <Team />
      <LegalConsultationForm />
      <Footer />
    </>
  )
}

export default AboutUsPage