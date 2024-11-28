import React, { useState } from "react";
import {Button, Card} from 'react-bootstrap';

function ProductCard({item, sku, name, price, discount, btnText, btnAction})
{
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 p-2 mt-2 d-flex">
            <Card>
                <Card.Img
                    style={{ "objectFit": "contain", "aspectRatio": "1/1", "width": "100%"}}
                    variant="top" 
                    src={`https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/${sku}/${sku}`}
                    alt={sku}
                    />
                <Card.Body className="bg-info p-0 col-12 d-flex">
                        <div className="p-0 m-0 d-flex row justify-content-center">
                            <div className="pt-2 pb-2">
                                <Card.Title style={{"color": "#000"}}><strong>{name}</strong></Card.Title>
                                <Card.Subtitle style={{"color": "#000"}}>SKU: {sku}</Card.Subtitle>
                            </div>

                            <div className="p-0 align-self-end d-flex row border-top">
                                <h5 style={{"color": "#CC0000"}} className="p-2 m-0">Regular Price: ${price.toFixed(2)}</h5>
                                <h5 style={{"backgroundColor": "white", "color": "#41b5ce"}} className="p-2">Business Select Price: <strong>${(price - ((price * discount) / 100)).toFixed(2)}</strong></h5>
                                <h5 style={{"color": "#AAFF00"}}><strong>Savings: ${((price * discount) / 100).toFixed(2)}</strong></h5>
                                <Button className="btn-md align-self-end" variant="primary" onClick={(e) => btnAction(e, item)}>{btnText}</Button>
                            </div>
                        </div>

                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;