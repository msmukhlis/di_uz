import React from 'react'
import styles from "../aboutPage/AboutPage.module.css"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export const AboutPage = () => {

    const { t, i18n } = useTranslation();

    const handleChange = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
    };
    handleChange

    const scrolltoTop = () => {
        window.scrollTo(0, 0)
      }

  return (
    <div className={styles.aboutPage}>
        <div data-aos="fade-down-right" className={styles.title}>
                <div className={styles.line}></div>
                <h2>{t("About")}</h2>
            </div>
            <h2 data-aos="fade-down-right" className={styles.h2} >DISCOVER INVEST</h2>
      <div className={styles.display}>
      <div data-aos="fade-down-right" className={styles.texts}>
            <p>{t("We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment: the company takes full responsibility for the environmental aspects related to the construction and operation of buildings and infrastructure.")}</p>
        </div>
        <div className={styles.boxes} data-aos="fade-down-right">
            <div  className={styles.row}>
                <div className={`${styles.box} ${styles.box2}`}>
                    <h2></h2>
                    <p></p>
                </div>
                <div className={styles.box}>
                    <h2>150+</h2>
                    <p>{t("Projects")}</p>
                </div>
                <div className={styles.box}>
                    <h2>16</h2>
                    <p>{t("Residential complexes")}</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.box}>
                    <h2>14</h2>
                    <p>{t("14 years on marketplace")}</p>
                </div>
                <div className={styles.box}>
                    <h2>250+</h2>
                    <p>{t("Special techniques recuperated")}</p>
                </div>
                <div className={styles.box}>
                    <h2>9+</h2>
                    <p>{t("Hospitals")}</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={`${styles.box} ${styles.box3}`}>
                <Link onClick={scrolltoTop} className={styles.link} to="/about"><h3>{t("About")}</h3></Link>
                </div>
                <div className={styles.box}>
                    <h2>4000+</h2>
                    <p>{t("The number of employees")}</p>
                </div>
                <div className={`${styles.box} ${styles.box2}`}>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
