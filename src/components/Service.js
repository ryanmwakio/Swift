import React from 'react';


const Service = ({icon,title,info}) => {
    return (
        <>
        <div className="service">
            <div className="header-icon-wrapper">
            <div className="header-icon">
                <i className={icon}></i>
            </div>
            </div>
           
            <h3 className="service-title">{title}</h3>

            <p className="service-text">
               {info}
            </p>

         </div>
        </>
    );
}

export default Service;
