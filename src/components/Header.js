import React from "react";

function Header({ title, version}) {


    return (
        <div className="header">
            <div>{title}</div>
            <div>Version: {version}</div>
        </div>
    );
}

export default Header;