import React from 'react'
import styles from "../contacts/Contacts.module.css"
import { FaArrowDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { LuAlarmClock } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FaFacebookF,FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export const Contacts = () => {

  const sendMessage = (e) => {
    e.preventDefault();
    const token = "7326578532:AAFl2JZIl8OAdYGOoJMNU5jvhdIkB8XyjfE"
    const chat_id =  5089303527;
    const url = `https://api.telegram.org/bot${token}/sendMessage`
    const name = document.getElementById("name").value;
    const tel = document.getElementById("tel").value;
    const department = document.getElementById("department").value;
    const questions = document.getElementById("questions").value;
    const messageContent = `Name: ${name} \nPhone Number: ${tel} \nDepartment: ${department} \nQuestions: ${questions}`;

    axios({
      url:url,
      method:"POST",
      data: {
        "chat_id":chat_id,
        "text": messageContent,
      }
    }).then((res) => {
      document.getElementById("myForm").reset();
      alert("Sent successfully")
    }).catch((err) => {
      console.log("wrong", err);
    })
  }
             
  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  handleChange


  return (
    <div className={styles.main}>
      <div className={styles.mainPage}>
        <div className={styles.texts}>
          <h2 className={styles.title}>{t("CONTACTS")}</h2>
          <p className={styles.text}>{t("Leave your contacts by filling out the current form and we will contact you as soon as possible.")}</p>
          <div className={styles.btnBox}>
            <a className={styles.icon} href="#"><FaArrowDown /></a>
          </div>
        </div>
      </div>
      <div className={styles.help}>
        <div className={styles.title}>
          <div className={styles.line}></div>
          <h2>{t("How we can")}</h2>
        </div>
        <h2 className={styles.h2}>{t("help?")}</h2>
        <p className={styles.text}>{t("Leave your contacts by filling out the current form and we will contact you as soon as possible.")}</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h3><FaLocationDot className={styles.icon2} />{t("Address")}</h3>
            <p>{t("Uzbekistan, Tashkent, National Park of Uzbekistan named after Alisher Navoi")}</p>
          </div>
          <div className={styles.box}>
            <h3><PiPhoneCallFill className={styles.icon2} />{t("Phone")}</h3>
            <p>+998 71 288 88 88</p>
          </div>
          <div className={styles.box}>
            <h3><LuAlarmClock className={styles.icon2} />{t("Working hours")}</h3>
            <p>09:00 - 18:00 {t("Mon-Sat")}</p>
          </div>
        </div>
      </div>
      <form className={styles.form} id="myForm" onSubmit={sendMessage}>
        <fieldset className={styles.fieldset}>
          <label>{t("Name")}</label>
          <input className={styles.input} type="text" id='name' placeholder={t('What is your name?')}/>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label>{t("Phone number")}</label>
          <input className={styles.input} type="tel" id='tel' placeholder='+998'/>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label>{t("Department")}</label>
          <select className={styles.input} id="department">
                  <option value="Department" selected>{t("Department")}</option>
                  <option value="Sales department">{t("Sales department")}</option>
                  <option value="Human Resources Department">{t("Human Resources Department")}</option>
                  <option value="Accounting">{t("Accounting")}</option>
                  <option value="Purchasing department">{t("Purchasing department")}</option>
                  <option value="Office">{t("Office")}</option>
                  <option value="Financial department">{t("Financial department")}</option>
                </select>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label>{t("Your question")}</label>
          <textarea  className={styles.input} id="questions" placeholder={t("Leave your question")}></textarea>
        </fieldset>
        <div className={styles.btn}>
            <button type="submit">{t("Feedback")}</button>
          </div>
      </form>
      <div className={styles.map}>
          <iframe
            width="100%"
            height="434px"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%BC%D0%B0%D1%85%D0%B0%D0%BB%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D1%81%D1%85%D0%BE%D0%B4%20%D0%B3%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%20%D0%91%D0%B5%D1%88%D1%91%D0%B3%D0%BE%D1%87+(Discover%20Invest)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>
        <div className={styles.copyRight}>
        <p className={styles.copyText}>© 2022 Discover Invest. {t("All rights reserved.")}</p>
        <div className={styles.medias}>
            <Link className={styles.media} to="#"><FaFacebookF /></Link>
            <Link className={styles.media} to="#"><AiFillInstagram /></Link>
            <Link className={styles.media} to="#"><FaTelegramPlane /></Link>
        </div>
      </div>
    </div>
  )
}
