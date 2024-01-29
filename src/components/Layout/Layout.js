import * as React from "react";
import { useState } from "react";
import Logo from '../../images/assets/kaa-logo.svg';
import Logowihte from '../../images/assets/kaa-logo-footer.svg';
import { Link } from "gatsby";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hamburger from "../Hamburgermenu/Hamburgermenu";
import {
  container,
  flex_container_logo,
  flex_container,
  openHamburger,
  closeHamburger,
  hamburger,
} from "./layout.module.css";

const Layout = ({ children }) => {
  const screenWidth = typeof window !== 'undefined' ? window.screen.width : null;
  const [isOpen, setsiOpen] = useState(false);

  const toggleHamburger = () => {
    if (screenWidth >= 768) {
      return;
    } else {
      setsiOpen(!isOpen);
    }
  };

  return (
    <div className={container}>
      <Header />
      <nav>
        <ul className={isOpen? openHamburger: closeHamburger}>
          {isOpen?(<Logowihte className={flex_container_logo}/>):(<Logo className={flex_container_logo}/>)}
          <div className={flex_container}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
          </div>
        </ul>
      <div className={hamburger} onClick={toggleHamburger}>
        <Logo className={flex_container_logo}/>
        <Hamburger isOpen={isOpen} />
      </div>
      </nav>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
