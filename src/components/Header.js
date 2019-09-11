import React from "react";

function Header({ title, version}) {

    return (
        <div>
            <h1 className="h1Head">Nasa Photo of the Day!</h1>
            <div className="header">
                <h3>{title}</h3>
                <h3 className="version">Version: {version}</h3>
            </div>

        </div>
    );
}

export default Header;