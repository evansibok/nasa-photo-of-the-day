import React from "react";
import styled from "styled-components";


// Section Styles
const BottomDetails = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ImageCredits = styled.h4`
    font-size: 0.8rem;
    font-weight: 400;

    span {
        font-weight: bold;
    }
`;



// Section Component Declaration
function Section({ copyright, date, explanation}) {


    return (
        <div>
            <BottomDetails>
                <ImageCredits>Image Credits: <span>{copyright}</span></ImageCredits>
                <h4>{date}</h4>
            </BottomDetails>
            <p className="explain">{explanation}</p>
        </div>
    );
}

export default Section;