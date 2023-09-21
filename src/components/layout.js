import * as React from "react";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Logo from '../images/assets/kaa-logo.svg';
import Logowihte from '../images/assets/kaa-logo-footer.svg';
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import Hamburger from "./hamburgermenu";
import {
  container,
  nav_menu,
  flex_container_logo,
  flex_container,
  openHamburger,
  closeHamburger,
  hamburger,
} from "./styles/layout.module.css";

const Layout = ({ children }) => {
  const scrennWidth = window.screen.width;
  const [isOpen, setsiOpen] = useState(false);

  const toggleHamburger = () => {
    if (scrennWidth >= 768) {
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
              <Link to="/whychooseus">Why choose Us</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
          </div>
        </ul>
      <div className={hamburger} onClick={toggleHamburger}>
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
