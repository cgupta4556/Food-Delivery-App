import { useState } from "react";
import { CartImg_URL } from "../utils/constants";

const CartItem = (props) => {
    const {menuItem, handleremoveItem} = props;
    const {name, description, price, imageId, id} = menuItem?.card?.info || {};

    const [count, setCount] = useState(1);

    return (
        <div className="flex justify-between w-200 pb-8 mb-4 border-b-1">
            <div className="w-150">
                <div className="font-bold text-l mt-3">{name}</div>
                <div className="font-semibold">₹{price ? price / 100 : "not given"}</div>
                {/* <div className="flex">
                    <div className="font-semibold text-green;">⭐{ratings.aggregatedRating.rating || null}</div>
                    <div>{"("+ratings.aggregatedRating.ratingCountV2+")"}</div>
                </div> */}
                <div className="text-sm/6">{description}</div>
            </div>
            <div className="image-section">
            <div className="absolute flex justify-around ml-4.5 mt-35 shadow-2xl bg-white font-semibold cursor-pointer text-green-700 rounded-md">
                <button className="rounded-l-md hover:bg-gray-200 font-bold text-xl py-1 px-4"
                    onClick={() => count === 1 ? handleremoveItem() : setCount(prev => prev - 1)}
                >-</button>
                <div className=" font-semibold text-md px-2 py-1">{count}</div>
                <button className="rounded-r-md hover:bg-gray-200 font-bold text-xl py-1 px-3"
                    onClick={() => count > 0 && setCount(prev => prev + 1)}
                >+</button>
            </div>
                <img className="h-[160px] w-[144px] object-cover rounded-md"
                src={CartImg_URL+imageId} alt="item-img" />
            </div>
        </div>
    )
};

export default CartItem;