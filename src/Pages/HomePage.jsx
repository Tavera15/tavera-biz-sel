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

            <div>
                <h1>Ink & Toner</h1>

                <div className="container p-4 mb-4 d-flex flex-wrap justify-content-evenly">
                    <div className="col-6 col-md-2 p-1"><Link to="/products/ink/hp" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://static.vecteezy.com/system/resources/previews/019/909/664/non_2x/hp-transparent-hp-free-free-png.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="HP"/></Link></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/ink/brother" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://static.cdnlogo.com/logos/b/91/brother.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Brother"/></Link></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/ink/od" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Office-depot-logo.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="OD"/></Link></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/ink/canon" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://static.vecteezy.com/system/resources/previews/019/956/120/non_2x/canon-transparent-canon-free-free-png.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Canon"/></Link></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/ink/epson" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://cdn.freebiesupply.com/logos/large/2x/epson-2-logo-png-transparent.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Epson"/></Link></div>
                </div>
            </div>

            <hr />

            <div>
                <h1>Printers</h1>

                <div className="container p-4 mb-4 d-flex flex-wrap justify-content-evenly">
                    <div className="col-6 col-md-2 p-1"><Link to="/products/printers/hp" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://static.vecteezy.com/system/resources/previews/019/909/664/non_2x/hp-transparent-hp-free-free-png.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="HP"/></Link></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/printers/brother" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://static.cdnlogo.com/logos/b/91/brother.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Brother"/></Link></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/printers/canon" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://static.vecteezy.com/system/resources/previews/019/956/120/non_2x/canon-transparent-canon-free-free-png.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Canon"/></Link></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/printers/epson" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://cdn.freebiesupply.com/logos/large/2x/epson-2-logo-png-transparent.png" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Epson"/></Link></div>
                </div>
            </div>

            <hr />

            <div>
                <h1>Furniture</h1>
                
                <div className="container p-4 mb-4 d-flex flex-wrap justify-content-evenly">
                    <div className="col-6 col-md-2 p-1"><Link to="/products/furniture/chairs" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/8638586/8638586_o01_111022/8638586" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Chairs"/></Link></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/furniture/desks" className="col-12 bg-white rounded-circle d-flex align-items-center "><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/7407968/7407968_o01_030723/7407968" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Desks"/></Link></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/furniture/casesanddrawers" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/229860/229860_o01_061120/229860" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Cabinets"/></Link></div>
                </div>
            </div>
            
            <hr />

            <div>
                <h1>Supplies</h1>
                
                <div className="container p-4 mb-4 d-flex flex-wrap justify-content-evenly">
                    <div className="col-6 col-md-2 p-1"><Link to="/products/supplies/labels" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/1216504/1216504_o01_24/1216504" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="labels"/></Link><h4>Labels</h4></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/supplies/envelopes" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/190294/190294" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="envelopes"/></Link><h4>Envelopes</h4></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/supplies/filefolders" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/675612/675612" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="filefolders"/></Link><h4>File Folders</h4></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/supplies/binders" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/212041/212041" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="binders"/></Link><h4>Binders</h4></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/supplies/thermalpaper" className="col-12 bg-white rounded-circle d-flex align-items-center "><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/615225/615225" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="thermalpaper"/></Link><h4>Thermal Paper</h4></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/supplies/forms" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/308403/308403" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="forms"/></Link><h4>Business Forms</h4></div>
                </div>
            </div>

            <hr />
            
            <div>
                <h1>Tech</h1>
                
                <div className="container p-4 mb-4 d-flex flex-wrap justify-content-evenly">
                    <div className="col-6 col-md-2 p-1"><Link to="/products/tech/calculators" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/7276012/7276012" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="calculators"/></Link><h4>Calculators</h4></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/supplies/envelopes" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/638562/638562" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Telephones"/></Link><h4>Telephones</h4></div>
                </div>
            </div>

            <hr />

            <div>
                <h1>Copy & Print</h1>
                <div className="container p-4 mb-4 d-flex flex-wrap justify-content-evenly">
                    <div className="col-6 col-md-2 p-1"><Link to="/products/self-service/self-service" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/870284/870284_o01_082622/870284" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="SS"/></Link><h4>S/S Copies</h4></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/cpd/lettercopies" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/870284/870284_o01_082622/870284" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="FS"/></Link><h4>F/S Copies</h4></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/cpd/blueprints" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/390986/390986_p/390986" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="BPs"/></Link><h4>Blueprints</h4></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/cpd/posters" className="col-12 bg-white rounded-circle d-flex align-items-center "><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/818654/818654_o01_110623/818654" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="Posters"/></Link><h4>Posters</h4></div>
                    <div className="col-6 col-md-2 p-1"><Link to="/products/cpd/carbonlessforms" className="col-12 bg-white rounded-circle d-flex align-items-center"><img className="col-12 rounded-circle" src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/9692093/9692093_o01_070121a/9692093" style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}} alt="CF"/></Link><h4>Carbonles Forms</h4></div>
                </div>
                <img className="col-12 p-4 col-md-4" src={cpdPrices} alt="cpd"/>
            </div>
        </div>
    );
}

export default HomePage;