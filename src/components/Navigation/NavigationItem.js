import React from 'react';
import { Link } from "react-scroll";

const NavigationItem = props => {
    const { name } = props;

    return ( 
        <Link 
            activeClass="active"
            to={name.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
        >
            {name}
        </Link>
    );
}
 
export default NavigationItem;