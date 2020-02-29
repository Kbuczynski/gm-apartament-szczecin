import React from 'react';
import ContentData from "./ContentData";
import ContentItem from "./ContentItem";

const Content = () => {
    return ( 
        <section className="content" id="apartament">
            <h2 className="content__title">Apartament</h2>

            <div className="content__wrapper">
                {
                    ContentData.map(({icon, title, text}, index) => 
                        <ContentItem key={index} icon={icon} title={title} text={text} />
                    )
                }
            </div>

            <iframe 
                title="Lewandowskiego 15" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.8688190305697!2d14.533216415841096!3d53.41717217999385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0982f90e92f5%3A0xef684d2503689956!2sGM%20Apartamenty%20Szczecin%20%C5%9Ar%C3%B3dmie%C5%9Bcie!5e0!3m2!1spl!2spl!4v1582982290477!5m2!1spl!2spl" 
                width="100%" 
                height="500" 
                className="content__map"
            />
        </section>
    );
}
 
export default Content;