import React from 'react';

const Contact = () => {
    return ( 
        <section className="contact" id="kontakt">
            <h2 class="contact__title">Kontakt</h2>
            <div className="contact__wrapper">
                <a href="tel:605157020">+48 605 157 020</a>
                <a href="mailto:gm.apartamenty.szczecin@gmail.com">gm.apartamenty.szczecin@gmail.com</a>
                <a href="https://www.facebook.com/gmapartamentyszczecin" rel="noopener noreferrer" target="_blank">Napisz do nas na Facebook’u</a>
                <a onClick={() => window.open(`/Regulamin GM Apartament Szczecin.pdf`, "_blank")}>Regulamin (plik pdf)</a>
            </div>
        </section>
    );
}
 
export default Contact;