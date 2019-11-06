import React from "react";
import styled from "styled-components";


// Section Styles
const BottomDetails = styled.div`
    display: flex;
    justify-content: space-between;
`;
const fileTypeStyle = styled.h4`
    font-size: 0.8rem;
    font-weight: 400;
    font-style: italic;

    span {
        font-weight: bold;
        font-style: normal;
    }
`;

const DateStyle = styled(fileTypeStyle)`
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

                <fileTypeStyle>{mediaType}</fileTypeStyle>
                <BottomDetails>
                    <DateStyle>{date}</DateStyle>
                </BottomDetails>
            </div>
            <ExplainStyle>{explanation}</ExplainStyle>
        </div>
    );
}

export default Section;