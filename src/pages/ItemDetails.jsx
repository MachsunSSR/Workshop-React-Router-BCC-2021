import React, { useEffect, useState } from "react";

const ItemDetails = ({ match }) => {
    const [item, setItem] = useState({
        images: {},
    });

    useEffect(() => {
        fetchItem();
        // console.log(match);
    }, []);

    const fetchItem = async () => {
        const data = await fetch(
            `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
        );
        const detail = await data.json();

        setItem(detail.data.item);
        console.log(item);
    };

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.icon} alt="" />
        </div>
    );
};

export default ItemDetails;
