import React from "react";
import styled from "styled-components";

// Header Styles
const H1Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
`;

const StyledH1 = styled.h1`
    color: #ed344d;
    border: 2px solid #ed344d;
    padding: 1em;
    font-size: 1.5rem;
    width: 350px;
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
`;

function Header({ title, version}) {

    return (
        <div>
            <H1Div>
                <StyledH1>Nasa Photo of the Day!</StyledH1>
            </H1Div>
            <StyledHeader>
                <h3>{title}</h3>
                <h3 className="version">Version: {version}</h3>
            </StyledHeader>

        </div>
    );
}

export default Header;