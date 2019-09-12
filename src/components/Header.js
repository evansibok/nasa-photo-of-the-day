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
    color: #fff;
    background: #ed344d;
    padding: 1em;
    font-size: 1.5rem;
    width: 50%;
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
`;

const TitleH3 = styled.h3`
    font-size: 1.2rem;
    color: #8d5696;
`;

const VersionH4 = styled.h4`
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #b26fbd;
`;

function Header({ title, version}) {

    return (
        <div>
            <H1Div>
                <StyledH1>NASA Photo of the Day!</StyledH1>
            </H1Div>
            <StyledHeader>
                <TitleH3>{title}</TitleH3>
                <VersionH4 className="version">Version: {version}</VersionH4>
            </StyledHeader>

        </div>
    );
}

export default Header;