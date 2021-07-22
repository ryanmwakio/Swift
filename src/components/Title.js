import React from 'react';

const Title = ({title,subtitle}) => {
    return (
        <div className="title">
            <div>
            <h1 className="headline">{title}</h1>
            <h5 className="sub-headline">{subtitle}</h5>
            <div className="title-block"></div>
            </div>
        </div>
    );
}

export default Title;
