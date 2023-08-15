import React from "react";

function Card(props) {

    const { first_name, last_name, email, id } = props;

    const inlineStyleSample = {
        width : '18 rem',
        backgroundColor : 'aliceblue'
    };

    return (
        <div>
            <div className="card" style={inlineStyleSample}>
                    <div className="card-body">
                        <h5 className="card-title">{first_name} {last_name}</h5>
                        <p className="card-text">Email :  {email}</p>
                        <p className="card-text">ID : {id}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    );
};

export default Card;
