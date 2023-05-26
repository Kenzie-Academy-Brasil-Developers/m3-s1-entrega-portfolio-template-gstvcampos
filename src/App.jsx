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

import htmlIcon from './assets/html-icon.png'
import cssIcon from './assets/css-icon.png'
import jsIcon from './assets/js-icon.png'
import reactIcon from './assets/react-icon.png'

function App() {
  return (
    <>
      <Header>
        <Button name={"Contato"}/>
      </Header>
      <BannerSection>
        <Button name={"Saiba mais"}/>
      </BannerSection>
      <AboutMeSection/>
      <TechSection>
        <TechCard name={"HTML"} imageUrl={htmlIcon}/>
        <TechCard name={"CSS"} imageUrl={cssIcon}/>
        <TechCard name={"Javascript"} imageUrl={jsIcon}/>
        <TechCard name={"React"} imageUrl={reactIcon}/>
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
