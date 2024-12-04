import React, { useState } from "react";
import {Button, Card} from 'react-bootstrap';

function ProductCard({item, sku, name, price, defQty, discount, btnText, btnAction, enableQty, isInCart})
{
    const [qty, setQty] = useState(defQty);

    function handleSubmit(e)
    {
        const cartItem = {
            "sku": sku,
            "name": name,
            "price": price,
            "discount": discount,
            "qty": Number.parseInt(qty)
        }

        btnAction(e, cartItem);
        setQty(1);
    }

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
                    <form className={`${isInCart ? "bg-dark" : "bg-info"} p-0 col-12 d-flex`} onSubmit={(e) => handleSubmit(e)}>

                        <div className="p-0 m-0 d-flex row justify-content-center">
                            <div className="pt-2 pb-2">
                                <Card.Title style={{"color": isInCart ? "#fff" : "#000"}}><strong>{name}</strong></Card.Title>
                                <Card.Subtitle style={{"color": isInCart ? "#fff" : "#000"}}>SKU: {sku}</Card.Subtitle>
                            </div>

                            <div className="p-0 align-self-end d-flex row border-top">
                                <h5 style={{"color": isInCart ? "#fff" : "#000"}} className="p-2 m-0 border-bottom">Unit Price: ${(price).toFixed(2)}</h5>
                                <h5 style={{"color": "#CC0000"}} className="p-2 m-0">Regular Price: ${(price * qty).toFixed(2)}</h5>
                                <h5 style={{"color": "#41b5ce"}} className={`p-2 ${isInCart ? "bg-dark" : "bg-light"}`} >Business Select Price: <strong>${((price * qty) - (((price * qty) * discount) / 100)).toFixed(2)}</strong></h5>
                                <h5 style={{"color": "#AAFF00"}}><strong>Savings: ${(((price * qty) * discount) / 100).toFixed(2)}</strong></h5>

                                <div className="m-0">
                                    <input disabled={!enableQty} value={qty} onChange={(e) => setQty(e.target.value)} className="form-control text-center" type="number" min={1}/>
                                    <Button className="btn-md align-self-end col-12 mt-2 mb-1" variant="primary" type="submit">{btnText}</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;