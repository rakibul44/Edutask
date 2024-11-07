import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className="card">
            <div className="card-image">
                <img src="https://via.placeholder.com/300x150" alt="Card" />
                <div className="card-icon-overlay">
                    <i className="icon-document">📄</i>
                </div>
            </div>
            <div className="card-content">
                <div className="card-date">Jun 01, 2023</div>
                <div className="card-category">Higher Study</div>
                <h3 className="card-title">XYZ</h3>
            </div>
            <div className="card-bookmark">
                <i className="icon-bookmark">🔖</i>
            </div>
        </div>
    );
};

export default Card;
