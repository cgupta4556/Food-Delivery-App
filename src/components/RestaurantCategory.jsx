import React, { useState } from "react";

import ItemCard from "./ItemCard";

const RestaurantCategory = ({info ,showItems, setshowIndex}) => {
    const {itemCards, title} = info?.card?.card
    // console.log(itemCards);

    function HandleClick(){
        setshowIndex();
    }

    return (
        <div className="">
            <div onClick={()=>HandleClick()}
             className="flex w-200 mb-4 justify-between p-3 bg-gray-100 shadow-lg rounded-md cursor-pointer hover:bg-white">
                <span className="text-md font-bold">{title}({itemCards.length})</span>
                <span className="text-xl mr-1 cursor-pointer">▽</span>
            </div>
            <div>
                {showItems && itemCards.map((i) => <ItemCard menuItem={i} key={i.card.info.id}/>)}
            </div>
        </div>
    )
}

export default RestaurantCategory;