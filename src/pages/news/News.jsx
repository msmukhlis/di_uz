import React from 'react'
import styles from "../news/News.module.css"
import news1 from "../../../public/images/news1.webp"
import news2 from "../../../public/images/news2.webp"
import news3 from "../../../public/images/news3.webp"
import news4 from "../../../public/images/news4.webp"
import { useTranslation } from 'react-i18next'

export const News = () => {
           
  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  handleChange


  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        <h2>{t("News")}</h2>
        <p>{t("We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment:")}</p>
      </div>
    <div className={styles.boxes}>
       <div className={styles.box}>
                <img src={news1} alt="photo" className={styles.img}/>
                <p className={styles.date}><span></span>2023-01-27</p>
                <p className={styles.text}>{t("Who is the project manager of construcktion?")}</p>
              </div>
              <div className={styles.box}>
                <img src={news2} alt="photo" className={styles.img}/>
                <p className={styles.date}><span></span>2022-12-31</p>
                <p className={styles.text}>{t("Discover Invest congratulates everyone on a coming Happy New Year 2023!")}</p>
              </div>
              <div className={styles.box}>
                <img src={news3} alt="photo" className={styles.img}/>
                <p className={styles.date}><span></span>2022-10-02</p>
                <p className={styles.text}>{t("THE DAY WHEN THE CONSTITUTION OF THE REPUBLIC OF UZBEKISTAN WAS ADOPTED")}</p>
              </div>
              <div className={styles.box}>
                <img src={news4} alt="photo" className={styles.img}/>
                <p className={styles.date}><span></span>2022-12-19</p>
                <p className={styles.text}>{t("We continue to introduce you to Discover Invest's wide range of construction properties.")}</p>
              </div>
    </div>
    </div>
  )
}
