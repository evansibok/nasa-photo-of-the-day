import React from "react";


// Section Styles
// const BottomDetails = styled.div`
//     display: flex;
//     justify-content: space-between;
// `;

// const DateStyle = styled.h4`
//     font-weight: bold;
// `;

// const ExplainStyle = styled.p`
//     font-size: 1rem;
//     text-align: justify;
//     font-weight: 500;
//     line-height: 1.7em;
//     font-style: normal;
// `;


// Section Component Declaration
function Section({ date, explanation }) {


    return (
        <div className="flex flex-col text-justify">
            <div>
                <h4>{date}</h4>
            </div>
            <p>{explanation}</p>
        </div>
    );
}

export default Section;