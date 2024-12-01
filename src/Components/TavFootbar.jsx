import React from "react";
import logo from "/TaveraLogo.png";

function TavFootBar()
{
    return(
        <div className="p-4 col-12">
            <hr />
            <img src={logo} className="col-6 col-md-2" alt="tavera-logo"/>
            <h4>Made by Joaquin Ramirez</h4>
        </div>
    );
}

export default TavFootBar;