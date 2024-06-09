import styles from "../about/About.module.css"
import download from "../../../public/images/презентация.pdf"
import { RiDownloadCloud2Line } from "react-icons/ri";
import pic1 from "../../../public/images/bg-blocks.svg"
import pic2 from "../../../public/images/about1.jpg"
import pic3 from "../../../public/images/about2.jpg"
import pic4 from "../../../public/images/about3.jpg"
import pic5 from "../../../public/images/about4.jpg"
import pic6 from "../../../public/images/timeline_building.svg"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export const About = () => {
     
  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  handleChange


  return (
    <div className={styles.main}>
      <div className={styles.mainPage}>
        <div className={styles.texts}>
          <h2 className={styles.title}>{t("ABOUT COMPANY")}</h2>
          <p className={styles.text}>{t("We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment:")}</p>
          <div className={styles.btnBox}>
            <a className={styles.btn} href={download}>{t("Download")}<RiDownloadCloud2Line className={styles.icon} /></a>
          </div>
        </div>
      </div>
      <div className={styles.aboutCompany}>
        <div className={styles.left}>
          <div className={styles.title2}>
            <div className={styles.line}></div>
            <h2>{t("About")}</h2>
          </div>
          <h2 className={styles.h2}>{t("Company")}</h2>
          <img src={pic1} alt="photo" className={styles.pic} />
        </div>
        <div className={styles.right}>
          <div className={styles.photoBox}>
            <img src={pic2} alt="photo" className={styles.photo} />
          </div>
          <p>{t("We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment: the company takes full responsibility for the environmental aspects related to the construction and operation of buildings and infrastructure.")}</p>
          <div className={styles.btnBox}>
            <Link to="/projects"><button className={styles.btn}>{t("Projects")}</button></Link>
          </div>
        </div>
      </div>
      <div className={styles.ours}>
        <span className={styles.line2}></span>
        <div className={styles.our}>
          <div className={styles.leftOurs}>
            <div className={styles.titleLeft}>
              <span>1</span>
              <h2>{t("Our mission")}</h2>
            </div>
            <p className={styles.textLeft}>{t("Our mission We introduce the most advanced technologies in construction in Uzbekistan and create modern design solutions. Relying on first-class workers, we build affordable housing and industrial buildings for many years.")}</p>
          </div>
          <div className={styles.rightOurs}>
            <div className={styles.photoBox2}>
              <img src={pic3} alt="photo" className={styles.photo2} />
            </div>
          </div>
        </div>
        <div className={styles.our}>
          <div className={styles.leftOurs}>
            <div className={styles.titleLeft}>
              <span>2</span>
              <h2>{t("Our Vision")}</h2>
            </div>
            <p className={styles.textLeft}>{t("Creation of the best project company in Central Asia, which provides an opportunity to: - Society - to improve the standard of living of people by setting high standards in work. - Clients - to enjoy joint activities, to build long-term and open relationships. - Employees - constant growth,")}</p>
          </div>
          <div className={styles.rightOurs}>
            <div className={styles.photoBox2}>
              <img src={pic4} alt="photo" className={styles.photo2} />
            </div>
          </div>
        </div>
        <div className={styles.our}>
          <div className={styles.leftOurs}>
            <div className={styles.titleLeft}>
              <span>3</span>
              <h2>{t("Our values")}</h2>
            </div>
            <p className={styles.textLeft}>{t("Our values Since the founding (LLC)")} "Discover Invest" {t("in 2008, we have been working only with professionals. Our specialists use advanced technologies and an innovative approach to business.Regardless of the time and place of operation, we remain committed to our values: staff and safety, continuous improvement and the trust of our customers.")}</p>
          </div>
          <div className={styles.rightOurs}>
            <div className={styles.photoBox2}>
              <img src={pic5} alt="photo" className={styles.photo2} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.timeLine}>
          <div className={styles.leftTimeline}>
            <img src={pic6} alt="photo" className={styles.timelinePhoto}/>
          </div>
          <div className={styles.rightTimeline}>
            <h2>2011</h2>
            <p>{t("In 2011 the need for a car park arose and was built so everyone can imagine how big the company is.")}</p>
          </div>
      </div>
      <div className={styles.boxes}>
                <div className={styles.box}>
                    <h2>150+</h2>
                    <p>{t("Projects")}</p>
                </div>
                <div className={styles.box}>
                    <h2>16</h2>
                    <p>{t("Residential complexes")}</p>
                </div>
            
            
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
                <div className={styles.box}>
                    <h2>4000+</h2>
                    <p>{t("The number of employees")}</p>
                </div>
                
            
        </div>
    </div>
  )
}
