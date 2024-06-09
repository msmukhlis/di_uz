import  MainPage  from '../../components/mainPage/MainPage'
import { AboutPage } from '../../components/aboutPage/AboutPage'
import { Avantages } from '../../components/avantages/Avantages'
import { Team } from '../../components/team/Team'
import { ProjectsPage } from '../../components/projectsPage/ProjectsPage'
import { CompanyNews } from '../../components/companyNews/CompanyNews'

export const Home = () => {
  return (
  <>
      <MainPage/>
      <AboutPage/>
      <Avantages/>
      <Team/>
      <ProjectsPage/>
      <CompanyNews/>
  </>
      
      
  
    
  )
}
