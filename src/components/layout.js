import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Logo from '../images/assets/kaa-logo.svg';
import { Link } from "gatsby";
import Header from "./header";
import {
  container,
  nav_menu,
  flex_container_logo,
  flex_container,
} from "./styles/layout.module.css";

const Layout = ({ children }) => {

  return (
    <div className={container}>
      <Header />
      <nav>
        <ul className={nav_menu}>
          <Logo className={flex_container_logo}/>
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
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
