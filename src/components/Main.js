import React from "react";

function Main({ image }) {

    return (
        <div className="imageCon">
            <img className="image"
                src={image}
                alt="today's image"
            />
        </div>
    );
}

export default Main;