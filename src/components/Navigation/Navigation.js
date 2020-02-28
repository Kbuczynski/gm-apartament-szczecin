import React from 'react';
import NavigationData from "./NavigationData";
import NavigationItem from "./NavigationItem";

import { animateScroll as scroll } from "react-scroll";

import logo from "../../img/logo.png";

const Navigation = () => {
    return ( 
        <nav className="navigation">
            <img src={logo} alt="GM Apartament Szczecin" className="navigation__logo" onClick={() => scroll.scrollToTop()} />

            <button className="navigation__hamburger" onClick={() => document.querySelector(".navigation__links").classList.toggle("reset-translate")}></button>

            <ul className="navigation__links">
                {
                    NavigationData.map(({name}, index) => 
                        <li className="navigation__links__link" key={index}>
                            <NavigationItem name={name} />
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}
 
export default Navigation;