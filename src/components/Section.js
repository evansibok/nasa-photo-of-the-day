import React from "react";
import styled from "styled-components";


// Section Styles
const BottomDetails = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DateStyle = styled.h4`
    font-weight: bold;
`;

const ExplainStyle = styled.p`
    font-size: 1rem;
    text-align: justify;
    font-weight: 500;
    line-height: 1.7em;
    font-style: normal;
`;


// Section Component Declaration
function Section({ date, explanation, mediaType }) {


    return (
        <div>
            <div>
                <BottomDetails>
                    <DateStyle>{date}</DateStyle>
                </BottomDetails>
            </div>
            <ExplainStyle>{explanation}</ExplainStyle>
        </div>
    );
}

export default Section;