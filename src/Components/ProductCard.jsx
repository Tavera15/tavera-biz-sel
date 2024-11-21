import React from "react";
import {Button, Card} from 'react-bootstrap';

function ProductCard({item, sku, name, price, discount, btnText, btnAction})
{
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 p-2 d-flex">
            <Card>
                <Card.Img
                    style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}}
                    variant="top" 
                    src={`https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/${sku}/${sku}_o01_041822/${sku}`}
                    alt={sku}
                    />
                <Card.Body className="bg-info p-0 pt-1 pb-1">
                    <Card.Title style={{"color": "#000"}}><strong>{name}</strong></Card.Title>
                    <Card.Subtitle style={{"color": "#000"}}>Sku: {sku}</Card.Subtitle>
                    <hr />
                    <h5 style={{"color": "#CC0000"}} className="p-2 m-0">Regular Price: ${price}</h5>
                    <h5 style={{"backgroundColor": "white", "color": "#41b5ce"}} className="p-2">Business Select Price: <strong>${(price - ((price * discount) / 100)).toFixed(2)}</strong></h5>
                    <h5 style={{"color": "#AAFF00"}}><strong>Savings ${((price * discount) / 100).toFixed(2)}</strong></h5>
                    <hr />
                    <Button variant="primary" onClick={(e) => btnAction(e, item)}>{btnText}</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;