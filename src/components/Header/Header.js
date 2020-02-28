import React from 'react';

import home from "../../img/home.jpg";

import { Link } from "react-scroll";

const Header = () => {
    return ( 
        <header className="header">
            <img src={home} alt="Salon" className="header__img" />
            <section className="header__box">
                <h1 className="header__box__title">GM Apartament&nbsp;Szczecin</h1>
                <p className="header__box__text"><span>Komfort</span><span>Wygoda</span><span>Styl</span></p>
                <button className="header__box__button">
                    <Link 
                        activeClass="active"
                        to="rezerwacja"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >
                        Rezerwuj&nbsp;teraz
                    </Link>
                </button>
            </section>
        </header>
    );
}
 
export default Header;