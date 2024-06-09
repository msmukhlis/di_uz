import React from 'react'
import styles from "../avantages/Avantages.module.css"
import { FaUsers } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { AiOutlineSafety } from "react-icons/ai";
import { useTranslation } from 'react-i18next';



export const Avantages = () => {

    const { t, i18n } = useTranslation();

    const handleChange = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
    };
    handleChange


  return (
     <div className={styles.main}>
          <div className={styles.title}>
                <div className={styles.line}></div>
                <h2>{t("Our")}</h2>
            </div>
            <h2 className={styles.h2}>{t("advantages")}</h2>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <div>
                        <div className={styles.icon}>
                            <FaUsers />
                        </div>
                        <h4 className={styles.title}>{t("Our team")}</h4>
                        <p className={styles.text}>{t("The company recruits experienced employees on a competitive basis")}</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div>
                        <div className={styles.icon}>
                            <HiOutlineChatBubbleLeftRight />
                        </div>
                        <h4 className={styles.title}>{t("Positive customer approach")}</h4>
                        <p className={styles.text}>{t("By looking at the great work we have done through our website, you will be sure that we have earned the trust of our customers")}</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div>
                        <div className={styles.icon}>
                            < AiOutlineSafety />
                        </div>
                        <h4 className={styles.title}>{t("All work guaranteed")}</h4>
                        <p className={styles.text}>{t("We perform our mission carefully and appreciate your belief in our company All mistakes were clearly corrected")}</p>
                    </div>
                </div>
            </div>
     </div>
  )
}
