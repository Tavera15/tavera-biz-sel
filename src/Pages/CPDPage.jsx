import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

function CPDPage({CPDItems, addToCart})
{
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if(CPDItems && !isLoaded)
        {

            for(let key in CPDItems)
            {
                let item = CPDItems[key];
                let itemSku = item.sku;
                let basePrices = item.basePrices;
                let paperTypes = item.paperTypes
                for(let c in basePrices)
                {
                    let currentBasePrice = basePrices[c];

                    for(let p in paperTypes)
                    {
                        let additionalCost = paperTypes[p];

                        const cpdItem = {
                            sku: itemSku,
                            name: `F/S ${p} - ${c}`,
                            price: (currentBasePrice + additionalCost),
                            qty: 1,
                            discount: 10 
                        }
                        console.log(cpdItem)
                        setItems(prev => [...prev, cpdItem]);
                    }
                }
            }
            setIsLoaded(true);
        }
    }, [isLoaded])

    return(
        <div>
            <div className="col-12 p-4 d-flex col flex-wrap justify-content-start align-items-stretch">
                {
                    items.length > 0 && isLoaded
                    ? items.map((p, i) => {
                        return (
                            <ProductCard
                                item={p}
                                sku={p.sku} 
                                price={p.price} 
                                name={p.name} 
                                discount={p.discount} 
                                key={i}
                                btnText="Add to cart"
                                btnAction={(e, item) => addToCart(e, item)}
                            />
                        )
                    })
                    :<h1>Loading...</h1>
                }
            </div>
        </div>
    );
}

export default CPDPage;