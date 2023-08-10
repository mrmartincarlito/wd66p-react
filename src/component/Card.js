import React from "react";

function Card(props) {

    const { name, age, address } = props;
    const inlineStyleSample = {
        width : '18 rem',
        backgroundColor : 'aliceblue'
    };

    return (
        <div>
            <div className="card" style={inlineStyleSample}>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Age : {age}</p>
                        <p className="card-text">Address :{address}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    );
};

export default Card;
