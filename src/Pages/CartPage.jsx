import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

function CartPage({cart, removeFromCart})
{
    const [regularSubtotal, setRegSubtotal] = useState(0);
    const [BSSubtotal, setBSSubtotal] = useState(0);
    const [totalSavings, setTotalSavings] = useState(0);

    useEffect(() => {
        let r = 0;
        let bs = 0;
        let sav = 0;

        for(let i in cart)
        {
            const item = cart[i];

            r += (item.price * item.qty);
            bs += ((item.price * item.qty) - (((item.price * item.qty) * item.discount) / 100));
            sav += (((item.price * item.qty) * item.discount) / 100);
        }

        setRegSubtotal(r);
        setBSSubtotal(bs);
        setTotalSavings(sav);
    },[cart])

    return(
        <div className="mt-4">
            <div className=" ">
                <h3 style={{"color": "#CC0000"}}>Regular Subtotal: ${regularSubtotal.toFixed(2)} (+${((regularSubtotal * 8.25) / 100).toFixed(2)})</h3>
                <h3 style={{"color": "#41b5ce"}}>Business Select Subtotal: ${BSSubtotal.toFixed(2)} (+${((BSSubtotal * 8.25) / 100).toFixed(2)})</h3>
                <h3 style={{"color": "#AAFF00"}}>Total Savings: ${totalSavings.toFixed(2)}</h3>
            </div>
            <hr />
            <div>    
                <div className="mt-4 col-12 p-4 d-flex col flex-wrap justify-content-start align-items-stretch">
                {
                    cart.length > 0
                    ?   cart.map((p, i) => {
                            return (
                                <ProductCard
                                    item={p}
                                    sku={p.sku} 
                                    price={p.price} 
                                    name={p.name} 
                                    discount={p.discount}
                                    defQty={p.qty}
                                    key={p.sku + i}
                                    btnText="Delete"
                                    enableQty={false}
                                    btnAction={(e) => removeFromCart(e, p)}
                                />
                            )
                        })
                    :   <h1>No items found</h1>
                }
                </div>
            </div>
        </div>
    );
}

export default CartPage;