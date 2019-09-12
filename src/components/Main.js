import React from "react";
import styled from "styled-components";

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