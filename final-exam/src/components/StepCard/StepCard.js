/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import css from './step-card.scss';

export const StepCard = ({title, text, number, img}) => {
    let stepText = `step ${number}`,
        backgroundStyle = {
            backgroundImage: `url(${img})`
        };

    return (
        <div className="step-card" style={backgroundStyle}>
            <span className="step-card__number">{stepText}</span>
            <h3 className="step-card__title">{title}</h3>
            <p className="step-card__text">{text}</p>
        </div>
    )
};

StepCard.propTypes = {
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    number: React.PropTypes.number,
    img: React.PropTypes.string
};