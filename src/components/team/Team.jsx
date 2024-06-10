import React, { useRef } from 'react';
import styles from "../team/Team.module.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import teamPerson1 from "../../../public/images/teamPerson1.webp";
import teamPerson2 from "../../../public/images/teamPerson2.webp";
import teamPerson3 from "../../../public/images/teamPerson3.webp";
import teamPerson4 from "../../../public/images/teamPerson4.webp";
import teamPerson5 from "../../../public/images/teamPerson5.webp";
import { useTranslation } from 'react-i18next';

export const Team = () => {
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  
  return (
    <div className={styles.main}>
      <div data-aos="fade-right" className={styles.title}>
        <div className={styles.line}></div>
        <h2>{t("Our")}</h2>
      </div>
      <h2 data-aos="fade-right" className={styles.h2}>{t("team")}</h2>
      <Slider
        className={styles.boxes}
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div className={styles.box}>
          <img src={teamPerson1} alt="person" className={styles.img}/>
          <div className={styles.texts}>
            <h3>{t("Xusanov Akromjon Turaxon o'g'li")}</h3>
            <p>{t("Project Manager")}</p>
          </div>
        </div>
        <div className={styles.box}>
          <img src={teamPerson2} alt="person" className={styles.img}/>
          <div className={styles.texts}>
            <h3>{t("Kuziev Jakhongir Bakhodirovich")}</h3>
            <p>{t("Construction site supervisor")}</p>
          </div>
        </div>
        <div className={styles.box}>
          <img src={teamPerson3} alt="person" className={styles.img}/>
          <div className={styles.texts}>
            <h3>{t("Artiqbaev Saxobiddin Doniyor o'g'li")}</h3>
            <p>{t("Project Manager")}</p>
          </div>
        </div>
        <div className={styles.box}>
          <img src={teamPerson4} alt="person" className={styles.img}/>
          <div className={styles.texts}>
            <h3>{t("Boltaev Obidjon Uchqin o'g'li")}</h3>
            <p>{t("Project Manager")}</p>
          </div>
        </div>
        <div className={styles.box}>
          <img src={teamPerson5} alt="person" className={styles.img}/>
          <div className={styles.texts}>
            <h3>{t("Norbekov Shavkat Bo'riboy o'g'li")}</h3>
            <p>{t("Project Manager")}</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
