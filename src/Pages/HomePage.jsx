import React from "react";
import cpdPrices from "/24x36 English Business Select CPD-2.png";
import bsLogo from "/bizzSel.png";
import { Link } from "react-router-dom";

function HomePage()
{

    return(
        <div className="p-4 justify-content-center align-items-center col-12">
            <div className="mb-4">
                <h1>Business Select Price Comparison</h1>
                <img className="col-12 col-md-6" src={bsLogo} alt="bs-logo"/>
                <h3>Compare Regular Price Items vs Business Select Pricing</h3>
            </div>

            <hr />

            <div>
                <h1>Ink & Toner</h1>
            </div>

            <div className="container p-4 mb-4 d-flex flex-wrap justify-content-evenly">
                <div className="col-6 col-md-2 p-1"><Link to="/products/ink/hp" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://static.vecteezy.com/system/resources/previews/019/909/664/non_2x/hp-transparent-hp-free-free-png.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="HP"/></Link></div>
                <div className="col-6 col-md-2 p-1"><Link to="/products/ink/brother" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://static.cdnlogo.com/logos/b/91/brother.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Brother"/></Link></div>
                <div className="col-6 col-md-2 p-1"><Link to="/products/ink/canon" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://static.vecteezy.com/system/resources/previews/019/956/120/non_2x/canon-transparent-canon-free-free-png.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Canon"/></Link></div>
                <div className="col-6 col-md-2 p-1"><Link to="/products/ink/epson" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://cdn.freebiesupply.com/logos/large/2x/epson-2-logo-png-transparent.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Epson"/></Link></div>
                <div className="col-6 col-md-2 p-1"><Link to="/products/ink/od" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Office-depot-logo.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="OD"/></Link></div>
            </div>

            <hr />

            <div>
                <h1>Printers</h1>
            </div>

            <div className="container p-4 mb-4 d-flex flex-wrap justify-content-evenly">
                <div className="col-6 col-md-2 p-1"><Link to="/products/products/hp" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://static.vecteezy.com/system/resources/previews/019/909/664/non_2x/hp-transparent-hp-free-free-png.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="HP"/></Link></div>
                <div className="col-6 col-md-2 p-1"><Link to="/products/products/brother" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://static.cdnlogo.com/logos/b/91/brother.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Brother"/></Link></div>
                <div className="col-6 col-md-2 p-1"><Link to="/products/products/canon" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://static.vecteezy.com/system/resources/previews/019/956/120/non_2x/canon-transparent-canon-free-free-png.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Canon"/></Link></div>
                <div className="col-6 col-md-2 p-1"><Link to="/products/products/epson" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://cdn.freebiesupply.com/logos/large/2x/epson-2-logo-png-transparent.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Epson"/></Link></div>
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