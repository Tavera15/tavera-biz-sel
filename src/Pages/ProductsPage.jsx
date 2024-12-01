import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

function ProductsPage({products, isLoaded, addToCart})
{
    const [items, setItems] = useState([]);
    const {category, brand} = useParams();
    const [filter, setFilter] = useState("");
    const [filterItems, setFilterItems] = useState([]);

    <div className="container col-12 col-md-6">
        <input onChange={(e) => setFilter(e.target.value)} value={filter} className="form-control" placeholder="Search (Item Name or Sku)" />
    </div>

    useEffect(() => {
        
        if(isLoaded)
        {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            const res = category in products && brand in products[category]
                ? products[category.toLowerCase()][brand.toLowerCase()]
                : []

            setItems(res);
            setFilterItems(res);
            setFilter("");
        }
    }, [category, brand, isLoaded]);

    useEffect(() => {
        try
        {
            if(isLoaded && items && items.length > 0)
            {
                setFilterItems(filter.trim() === "" ? items : items.filter((i) => i.name.toLowerCase().includes(filter.toLowerCase()) || i.sku.includes(filter)));
            }
        }
        catch(err)
        {
            setFilterItems([]);
        }

    }, [isLoaded, filter])

    return(
        <div>
            <div className="container col-12 col-md-6 mt-4">
                <input onChange={(e) => setFilter(e.target.value)} value={filter} className="form-control" placeholder="Search (Item Name or Sku)" />
            </div>
            <div className=" col-12 p-4 d-flex col flex-wrap justify-content-start align-items-stretch">
            {
                filterItems.length > 0
                ?   filterItems.map((p, i) => {
                        return (
                            <ProductCard
                                item={p}
                                sku={p.sku} 
                                price={p.price} 
                                name={p.name}
                                defQty={p.qty}
                                discount={p.discount} 
                                key={p.sku + i}
                                enableQty={true}
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

export default ProductsPage;