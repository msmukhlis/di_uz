import { useRef } from "react";
import styles from "../companyNews/CompanyNews.module.css"
import Slider from "react-slick";
import news1 from "../../../public/images/news1.webp"
import news2 from "../../../public/images/news2.webp"
import news3 from "../../../public/images/news3.webp"
import news4 from "../../../public/images/news4.webp"
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const CompanyNews = () => {
  let sliderRef = useRef(null);
    const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: false,
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
  }
   
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
            <div className={styles.display}>
            <div>
            <div data-aos="fade-right" className={styles.title}>
                <div className={styles.line}></div>
                <h2>{t("Company")}</h2>
            </div>
            <h2 data-aos="fade-right" className={styles.h2}>{t("News")}</h2>
            </div>
            <div className={styles.btns}>
              <button className={styles.btn} onClick={previous}>
                <FaArrowLeft />
              </button>
              <button className={styles.btn} onClick={next}>
                <FaArrowRight />
              </button>
            </div>
            </div>
            <Slider className={styles.boxes}
              ref={slider => {
                  sliderRef = slider;
              }}
              {...settings}> 
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
            </Slider>
            <div className={styles.btnBox}>
              <Link onClick={scrolltoTop} to="/news"><button className={styles.btnNews}>{t("All news")}</button></Link>
            </div>
      </div>
  )
}
