import React from 'react'
import styles from "../projects/Projects.module.css"
import project1 from "../../../public/images/projects1.webp"
import project2 from "../../../public/images/projects2.webp"
import project3 from "../../../public/images/projects3.webp"
import project4 from "../../../public/images/projects4.webp"
import project5 from "../../../public/images/projects5.webp"
import project6 from "../../../public/images/projects6.webp"
import { useTranslation } from 'react-i18next'

export const Projects = () => {
         
  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  handleChange


  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        <h2>{t("Projects")}</h2>
        <p>{t("We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment:")}</p>
      </div>
      <div className={styles.boxes}>
                <div className={styles.row}>
                    <div className={styles.box}>
                        <img src={project1} alt="project" className={styles.img}/>
                        <a href="#" className={styles.link}>Magic city</a>
                    </div>
                    <div className={styles.box}>
                        <img src={project3} alt="project" className={styles.img}/>
                        <a href="#" className={styles.link}>Boulevard</a>
                    </div>
                    <div className={styles.box}>
                        <img src={project5} alt="project" className={styles.img}/>
                        <a href="#" className={styles.link}>Gardens Residence</a>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.box}>
                        <img src={project2} alt="project" className={styles.img}/>
                        <a href="#" className={styles.link}>Fonon</a>
                    </div>
                    <div className={styles.box}>
                        <img src={project4} alt="project" className={styles.img}/>
                        <a href="#" className={styles.link}>Invento</a>
                    </div>
                    <div className={styles.box}>
                        <img src={project6} alt="project" className={styles.img}/>
                        <a href="#" className={styles.link}>{t("Presidential Schools")}</a>
                    </div>
                </div>
            </div>
    </div>
  )
}
