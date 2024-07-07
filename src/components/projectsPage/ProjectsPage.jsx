import React from 'react'
import styles from "../projectsPage/ProjectsPage.module.css"
import project1 from "../../../public/images/projects1.webp"
import project2 from "../../../public/images/projects2.webp"
import project3 from "../../../public/images/projects3.webp"
import project4 from "../../../public/images/projects4.webp"
import project5 from "../../../public/images/projects5.webp"
import project6 from "../../../public/images/projects6.webp"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const ProjectsPage = () => {

    const { t, i18n } = useTranslation();

    const handleChange = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
    };
    handleChange

    const scrolltoTop = () => {
        window.scrollTo(0, 0)
    }


    return (
        <div className={styles.main}>
            <div data-aos="fade-right" className={styles.title}>
                <div className={styles.line}></div>
                <h2>{t("Our")}</h2>
            </div>
            <h2 data-aos="fade-right" className={styles.h2}>{t("Projects")}</h2>
            <div className={styles.boxes}>
                <div className={styles.row}>
                    <div className={styles.box}>
                        <img src={project1} alt="project" className={styles.img} />
                        <div className={styles.content}>
                            <a href="#" className={styles.contentTitle}>Magic City</a>
                            <p className={styles.contentText}>Magic city is a large socially significant project. The cultural and entertainment cluster in Tashkent is one of the new attractions.</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src={project3} alt="project" className={styles.img} />
                        <div className={styles.content}>
                            <a href="#" className={styles.contentTitle}>Gardens Residence</a>
                            <p className={styles.contentText}>A grandiose residential quarter in the heart of the capital.</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src={project5} alt="project" className={styles.img} />
                        <div className={styles.content}>
                            <a href="#" className={styles.contentTitle}>Invento</a>
                            <p className={styles.contentText}>International kindergarten and school located in the international business center Tashkent City</p>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.box}>
                        <img src={project2} alt="project" className={styles.img} />
                        <div className={styles.content}>
                            <a href="#" className={styles.contentTitle}>Boulevard</a>
                            <p className={styles.contentText}>International kindergarten and school located in the international business center Tashkent City</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src={project4} alt="project" className={styles.img} />
                        <div className={styles.content}>
                            <a href="#" className={styles.contentTitle}>Fonon</a>
                            <p className={styles.contentText}>Fonon is a jewelry factory in Uzbekistan built on the basis of Italian ones in 2020. Fonon is the only large enterprise in Central Asia producing jewelry made of precious metals in European and Oriental style.</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src={project6} alt="project" className={styles.img} />
                        <div className={styles.content}>
                            <a href="#" className={styles.contentTitle}>Presidential Schools</a>
                            <p className={styles.contentText}>The Presidential School is a specialized public educational institution whose activities are aimed at identifying and educating gifted children to train highly qualified specialists.</p>
                        </div>                    
                    </div>
                </div>
            </div>
            <div className={styles.btnBox}>
                <Link onClick={scrolltoTop} to="/projects"><button className={styles.btn}>{t("All projects")}</button></Link>
            </div>
        </div>
    )
}
