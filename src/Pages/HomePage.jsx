import React from "react";
import cpdPrices from "/24x36 English Business Select CPD-2.png";
import bsLogo from "/bizzSel.png";
import { Link } from "react-router-dom";

function HomePage()
{

    return(
        <div className="col-12 justify-content-center align-items-center">
            <div className="mb-4 p-4 col-12" style={{
                "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://png.pngtree.com/thumb_back/fw800/background/20240331/pngtree-monitor-in-the-room-office-work-view-city-night-image_15699394.jpg)", 
                "backgroundRepeat": "no-repeat", 
                "backgroundPosition": "center", 
                "backgroundSize": "cover"}}>
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
                <div className="col-6 col-md-2 p-1"><Link to="/products/printers/hp" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://static.vecteezy.com/system/resources/previews/019/909/664/non_2x/hp-transparent-hp-free-free-png.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="HP"/></Link></div>
                <div className="col-6 col-md-2 p-1"><Link to="/products/printers/brother" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://static.cdnlogo.com/logos/b/91/brother.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Brother"/></Link></div>
                <div className="col-6 col-md-2 p-1"><Link to="/products/printers/canon" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://static.vecteezy.com/system/resources/previews/019/956/120/non_2x/canon-transparent-canon-free-free-png.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Canon"/></Link></div>
                <div className="col-6 col-md-2 p-1"><Link to="/products/printers/epson" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12" src="https://cdn.freebiesupply.com/logos/large/2x/epson-2-logo-png-transparent.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Epson"/></Link></div>
            </div>

            <hr />

            <div className="p-4">
                <h4>CPD Inventory will be added soon...</h4>
                <img className="col-12 col-md-4" src={cpdPrices} alt="cpd"/>
            </div>
        </div>
    );
}

export default HomePage;