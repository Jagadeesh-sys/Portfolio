import React from 'react';
/* import '../styles/TechStack.css'; */ /* Styles moved to App.css */

const SectionTitle = ({ title, subTitle, className }) => {
    return (
        <div className={`title ${className || ''}`}>
            <h1 className="primary-text">{title}</h1>
            <h2 className="secondary-text">{subTitle}</h2>
        </div>
    );
};

export default SectionTitle;
