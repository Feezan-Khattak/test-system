import React from 'react';
import CardStyle from "../Styles/CardStyle";

const Card = (props) => {
    const cardStyle = CardStyle();
    return (
        <>
            <div className={cardStyle.card}>
                <div className={cardStyle.cardHead}>
                    <h1>{props.title}</h1>
                </div>
                <div className={cardStyle.cardBody}>
                    <p>{props.desc}</p>
                </div>

            </div>
        </>
    );
};

export default Card;