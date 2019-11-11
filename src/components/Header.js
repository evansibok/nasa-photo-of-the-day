import React from "react";


// Header Component Declaration
function Header({ title, version}) {

    return (
      <div>
        <div className="flex justify-center items-center m-6 font-bold text-3xl bg-red-500 w-auto">
          <h1 className="text-white">NASA Photo of the Day!</h1>
        </div>
        <div className="flex text-red-500 justify-between font-semibold pt-2 pb-2">
          <h3>{title}</h3>
          <h4 className="version">Version: {version}</h4>
        </div>
      </div>
    );
}

export default Header;