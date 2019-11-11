import React from "react";

// Section Component Declaration
function Section({ date, explanation }) {


    return (
        <div className="flex flex-col text-justify">
            <div className="font-semibold pt-4">
                <h4>{date}</h4>
            </div>
            <p className="font-semibold pt-4 pb-4">{explanation}</p>
        </div>
    );
}

export default Section;