import React from "react";

function Section({ copyright, date, explanation}) {


    return (
        <div>
            <div className="bottomDetails">
                <h4>{copyright}</h4>
                <h4>{date}</h4>
            </div>
            <p>{explanation}</p>
        </div>
    );
}

export default Section;