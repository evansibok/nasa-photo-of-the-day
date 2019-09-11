import React from "react";

function Header({ title, version}) {

    return (
        <div className="header">
            <h3>{title}</h3>
            <h3>Version: {version}</h3>
        </div>
    );
}

export default Header;