import React from 'react'
import styles from "../header/Header.module.css"
import { MainPage } from '../mainPage/MainPage'
import { AboutPage } from '../aboutPage/AboutPage'
import { Avantages } from '../avantages/Avantages'
import { Team } from '../team/Team'
import { ProjectsPage } from '../projectsPage/ProjectsPage'
import { CompanyNews } from '../../companyNews/CompanyNews'

export const Header = () => {
  return (
    <header>
        <MainPage/>
        <AboutPage/>
        <Avantages/>
        <Team/>
        <ProjectsPage/>
        <CompanyNews/>
    </header>
  )
}
