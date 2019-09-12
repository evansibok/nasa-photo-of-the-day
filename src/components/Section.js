import React from "react";
import styled from "styled-components";

// Section Styles



// Section Component Declaration
function Section({ copyright, date, explanation}) {


    return (
        <div>
            <div className="bottomDetails">
                <h4>Image Credits: {copyright}</h4>
                <h4>{date}</h4>
            </div>
            <p className="explain">{explanation}</p>
        </div>
    );
}

export default Section;