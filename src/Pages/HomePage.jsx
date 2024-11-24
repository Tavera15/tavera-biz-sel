import React from "react";
import cpdPrices from "/24x36 English Business Select CPD-2.png";
import { Link } from "react-router-dom";

function HomePage()
{

    return(
        <div className="p-4 justify-content-center align-items-center col-12">
            <div className="mb-4">
                <h1>Business Select Price Comparison</h1>
                <h3>Compare Regular Price Items vs Business Select Pricing</h3>
            </div>

            <hr />

            <div>
                <h1>Ink & Toner</h1>
            </div>

            <div className="container p-4 mb-4 d-flex justify-content-evenly">
                <Link to="/products/ink/hp" className="col-2 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://static.vecteezy.com/system/resources/previews/019/909/664/non_2x/hp-transparent-hp-free-free-png.png" alt="HP"/></Link>
                <Link to="/products/ink/brother" className="col-2 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://static.cdnlogo.com/logos/b/91/brother.png" alt="Brother"/></Link>
                <Link to="/products/ink/canon" className="col-2 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://static.vecteezy.com/system/resources/previews/019/956/120/non_2x/canon-transparent-canon-free-free-png.png" alt="Canon"/></Link>
                <Link to="/products/ink/epson" className="col-2 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://cdn.freebiesupply.com/logos/large/2x/epson-2-logo-png-transparent.png" alt="Epson"/></Link>
                <Link to="/products/ink/od" className="col-2 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Office-depot-logo.png" alt="OD"/></Link>
            </div>

            <hr />

            <div className="mt-4">
                <h1>CPD Inventory will be added soon...</h1>
                <img className="col-12 col-md-4" src={cpdPrices} alt="cpd"/>
            </div>
        </div>
    );
}

export default HomePage;