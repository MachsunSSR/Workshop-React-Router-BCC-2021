import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const fetchData = await fetch(
            "https://fortnite-api.theapinetwork.com/upcoming/get"
        );
        const data = await fetchData.json();
        console.log(data.data);
        setItems(data.data);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div>
            {items.map((data) => (
                <h1 key={data.itemId}>
                    <Link to={`/shop/${data.itemId}`}>{data.item.name}</Link>
                </h1>
            ))}
        </div>
    );
};

export default Shop;
