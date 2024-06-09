import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import { About } from './pages/about/About';
import { Projects } from './pages/projects/Projects';
import { News } from './pages/news/News';
import { Contacts } from './pages/contacts/Contacts';
import { IoClose } from "react-icons/io5";
import './App.css';
import styles from "./App.module.css"
import { Home } from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import { Footer } from "./components/footer/Footer";
import { IoCall } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";


const App = () => {

  const [openFormBox, setOpenFormBox] = useState(false);

  const handleOpen = () => {
    setOpenFormBox(true);
  }

  const handleClose = () => {
    setOpenFormBox(false);
  }

  const sendMessage = (e) => {
    e.preventDefault();
    const token = "7326578532:AAFl2JZIl8OAdYGOoJMNU5jvhdIkB8XyjfE"
    const chat_id =  5089303527;
    const url = `https://api.telegram.org/bot${token}/sendMessage`
    const name = document.getElementById("name").value;
    const tel = document.getElementById("tel").value;
    const department = document.getElementById("department").value;
    const messageContent = `Name: ${name} \nPhone Number: ${tel} \nDepartment: ${department} `;

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
    <div className="container">
      <Navbar /> 
      <div className="callBox" onClick={handleOpen}>
        <a className="call" href="#"><IoCall /></a>
      </div>
      {openFormBox && (
        <div className={styles.formBox}>
          <form className={styles.form} id="myForm" onSubmit={sendMessage}>
            <h2 className={styles.title}>{t("WE WILL CALL YOU BACK")}</h2>
            <p className={styles.text}>{t("Leave your number and we will call you back.")}</p>
            <div className={styles.row}>
              <label className={styles.label}>
                <span>{t("Name")}</span>
                <input className={styles.input} id="name" type="text"/>
              </label>
            </div>
            <div className={styles.row}>
              <label className={styles.label}>
                <span>{t("Phone number")}</span>
                <input className={styles.input} id="tel" type="tel"/>
              </label>
            </div>
            <div className={styles.row}>
              <label className={styles.label}>
                <span>{t("Department")}</span>
                <select className={styles.input} id="department">
                  <option value="Department" selected>{t("Department")}</option>
                  <option value="Sales department">{t("Sales department")}</option>
                  <option value="Human Resources Department">{t("Human Resources Department")}</option>
                  <option value="Accounting">{t("Accounting")}</option>
                  <option value="Purchasing department">{t("Purchasing department")}</option>
                  <option value="Office">{t("Office")}</option>
                  <option value="Financial department">{t("Financial department")}</option>
                </select>
              </label>
            </div>
            <button className={styles.btn} type="submit">{t("Send")}</button>
            <p className={styles.text2}>{t("Please note that the opening hours of the sales department are from 18:00 to 21:00")}</p>
            <button className={styles.btnClose} type="button" onClick={handleClose}><IoClose /></button>
          </form>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
