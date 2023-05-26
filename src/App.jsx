import Header from './components/Header'
import Button from './components/Button'
import BannerSection from './components/Sections/BannerSection'
import AboutMeSection from './components/Sections/AboutMeSection'
import TechSection from './components/Sections/TechSection'
import TechCard from './components/Sections/TechCard'
import ProjectsSection from './components/Sections/ProjectsSection'
import ProjectCard from './components/Sections/ProjectCard'
import Footer from './components/Footer'

import './styles/reset.css'
import './styles/globalStyles.css'

function App() {
  return (
    <>
      <Header imageUrl={"./src/assets/portfolio.png"}>
        <Button name={"Contato"}/>
      </Header>
      <BannerSection imageUrl={"./src/assets/banner-img.png"}>
        <Button name={"Saiba mais"}/>
      </BannerSection>
      <AboutMeSection/>
      <TechSection>
        <TechCard name={"HTML"} imageUrl={"./src/assets/html-icon.png"}/>
        <TechCard name={"CSS"} imageUrl={"./src//assets/css-icon.png"}/>
        <TechCard name={"Javascript"} imageUrl={"./src//assets/js-icon.png"}/>
        <TechCard name={"React"} imageUrl={"./src//assets/react-icon.png"}/>
      </TechSection>
      <ProjectsSection>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </ProjectsSection>
    <Footer/>
    </>
  )
}

export default App
