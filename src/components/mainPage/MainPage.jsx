import styles from "../mainPage/MainPage.module.css"
import video from "../../../public/images/background_video.mp4"
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

 const MainPage = () => {

  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  handleChange

  return (
    <div className={styles.main}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src={video} type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.mainPage}>
        <h2>DISCOVER INVEST</h2>
        <p>{t("Perfection in everything")}</p>
        <div className={styles.btns}>
          <div className={styles.btnBox}>
            <Link to="/projects"><button className={`${styles.btn} ${styles.btn2}`}>{t("Projects")}</button></Link>
          </div>
          <div className={styles.btnBox}>
          <Link to="/Contacts"><button className={styles.btn}>{t("Contacts")}</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage;
