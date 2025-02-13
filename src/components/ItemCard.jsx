import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice"

const ItemCard = (props) => {
    const {menuItem} = props;
    const {name, description, price, imageId, ratings} = menuItem?.card?.info || {};
    
    const dispatch = useDispatch();

    function handleAddItem(props){
        dispatch(addItem(props));
    }

    return (
        <div className="flex justify-between w-200 pb-8 mb-4 border-b-1">
            <div className="w-150">
                <div className="font-bold text-l mt-3">{name}</div>
                <div className="font-semibold">₹{price/100 || "not given"}</div>
                {/* <div className="flex">
                    <div className="font-semibold text-green;">⭐{ratings.aggregatedRating.rating || null}</div>
                    <div>{"("+ratings.aggregatedRating.ratingCountV2+")"}</div>
                </div> */}
                <div className="text-sm/6">{description}</div>
            </div>
            <div className="image-section w-">
                <div className="absolute ml-4.5 mt-35 px-8 py-2 shadow-2xl bg-white font-extrabold cursor-pointer text-green-700 rounded-md hover:bg-gray-200"
                onClick={()=>handleAddItem(props)}
                >ADD</div>
                <img className="h-[160px] w-[144px] object-cover rounded-md"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+imageId} alt="item-img" />
            </div>
        </div>
    )
};

export default ItemCard;