import React from 'react';

const ContentItem = props => {
    const { icon, title, text } = props;

    return ( 
        <article className="content__wrapper__item">
            <i className={icon}></i>
            <h3>{title}</h3>
            <p>{text}</p>
        </article>
    );
}
 
export default ContentItem;