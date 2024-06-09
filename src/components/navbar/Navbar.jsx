import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "../navbar/Navbar.module.css";
import logo from "../../../public/images/logo.svg";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { FaDiamond } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { CgMenuRight } from "react-icons/cg";

export const Navbar = () => {
  const location = useLocation().pathname;

  const handleScroll = () => {
    const header = document.querySelector('nav');
    if (!location.includes("/projects") && !location.includes("/news") && window.scrollY > 250) {
      header.classList.add(styles.bg_style);
    } else {
      header.classList.remove(styles.bg_style);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={(location.includes("projects") || location.includes("news")) ? styles.bg_style_projects : ""}>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <CgMenuRight />
      </div>
      {/* Mobile Menu */}
      <div className={`${styles.nav__link} ${menuOpen ? styles.show : styles.hide}`}>
        <Link className={styles.link} to="/about"><FaDiamond className={styles.icon} />{t("About")}</Link>
        <Link className={styles.link} to="/projects"><FaDiamond className={styles.icon} />{t("Projects")}</Link>
        <Link className={styles.link} to="https://hr.di.uz/" target='_blank'><FaDiamond className={styles.icon} />{t("Career")}</Link>
        <Link className={styles.link} to="/news"><FaDiamond className={styles.icon} />{t("News")}</Link>
        <Link className={styles.link} to="/contacts"><FaDiamond className={styles.icon} />{t("Contacts")}</Link>
      </div>
      {/* Desktop Menu */}
      <div className={styles.links}>
        <Link className={styles.link} to="/about"><FaDiamond className={styles.icon} />{t("About")}</Link>
        <Link className={styles.link} to="/projects"><FaDiamond className={styles.icon} />{t("Projects")}</Link>
        <Link className={styles.link} to="https://hr.di.uz/" target='_blank'><FaDiamond className={styles.icon} />{t("Career")}</Link>
        <Link className={styles.link} to="/news"><FaDiamond className={styles.icon} />{t("News")}</Link>
        <Link className={styles.link} to="/contacts"><FaDiamond className={styles.icon} />{t("Contacts")}</Link>
      </div>
      <div className={styles.medias}>
        <Link className={styles.media} to="#"><FaFacebookF /></Link>
        <Link className={styles.media} to="#"><AiFillInstagram /></Link>
        <Link className={styles.media} to="#"><FaTelegramPlane /></Link>
      </div>
      <div className={styles.languages}>
        <div className={styles.languages_box}>
          <span>EN</span>
          <MdKeyboardArrowDown className={styles.arrowDown} />
        </div>
        <div className={styles.languages_list}>
          <a onClick={() => handleChange('ru')} href="#">RU</a>
          <a onClick={() => handleChange('en')} href="#">EN</a>
          <a onClick={() => handleChange('uz')} href="#">UZ</a>
        </div>
      </div>
      <div className={styles.numbers}>
        <a className={styles.call} href="tel:+998712888888">+998 (71) 288 88 88</a>
        <div className={styles.callBox}>
          <a className={styles.call} href="tel:+998712888888"><IoCall /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
