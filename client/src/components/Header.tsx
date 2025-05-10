import { useState } from "react";
import { Link } from "react-router";
import burgerMenuLogo from "../assets/burgerMenuLogo.png";
import crossMenuLogo from "../assets/crossMenuLogo.png";
import logo from "../assets/logo.png";
import styles from "../styles/Header.module.css";

export const Header: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  const handleNavToggle = () => {
    setNavIsOpen(!navIsOpen);
  };
  const handleLinkClick = () => {
    setNavIsOpen(false);
  };
  return (
    <header className={styles.globalHeader}>
      <img src={logo} alt="Logo Wankul" className={styles.headerLogo} />
      <nav
        className={navIsOpen ? styles.headerNavOpen : styles.headerNavClosed}
      >
        <Link
          to={"/"}
          onClick={() => {
            handleLinkClick();
          }}
        >
          Accueil
        </Link>
        <Link
          to={"/collection"}
          onClick={() => {
            handleLinkClick();
          }}
        >
          Collection
        </Link>
        <Link
          to={"/about"}
          onClick={() => {
            handleLinkClick();
          }}
        >
          A propos
        </Link>
        <Link
          to={"/profile"}
          onClick={() => {
            handleLinkClick();
          }}
        >
          Profil
        </Link>
      </nav>
      <button
        className={styles.burgerMenuBtn}
        type="button"
        onClick={() => {
          handleNavToggle();
        }}
      >
        <img
          src={navIsOpen ? crossMenuLogo : burgerMenuLogo}
          alt="Burger Menu Button"
        />
      </button>
    </header>
  );
};
