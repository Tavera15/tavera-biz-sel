import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard.jsx";
import HP_toner from "../Products/HPToner.json";
import Brother_toner from "../Products/BrotherToner.json";

function HomePage({addToCart})
{
    const inkDiscount = 10;

    const [ink, setInk] = useState([]);
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("");
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if(HP_toner.length > 0 && Brother_toner.length > 0)
        {
            const allInk = ink.concat(HP_toner, Brother_toner);
            setInk(allInk);
            setIsLoaded(true);
        }

    },[HP_toner, Brother_toner])

    useEffect(() => {
        if(isLoaded)
        {
            ink.map((i) => i.discount = inkDiscount);
            setItems(filter.trim() === "" ? ink : ink.filter((i) => i.name.toLowerCase().includes(filter.toLowerCase()) || i.sku.includes(filter)));
        }
    }, [isLoaded, filter])

    return(
        <div className="mt-4">
            <h1>Business Select Comparison</h1>

            <div className="container col-12 col-md-6">
                <input onChange={(e) => setFilter(e.target.value)} value={filter} className="form-control" placeholder="Search (Item Name or Sku)" />
            </div>

            <div className="mt-4 col-12 p-4 d-flex col flex-wrap justify-content-start align-items-stretch">
            {
                items.length > 0
                ?   items.map((p, i) => {
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
                :   <h1>No results found</h1>
            }
            </div>
        </div>
    );
}

export default HomePage;