import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cuisines,locality,areaName,avgRatingString,sla,cloudinaryImageId} = resData?.info

    return (
        <div className="w-55 p-2 mx-[9px] hover:border-1 shadow-xl rounded-xl hover:bg-indigo-100 ">
            <img 
                className="rounded-md" 
                alt="restra-img" 
                src = {IMG_URL + cloudinaryImageId}
            />
            <h3 className="text-xl font-bold">{name}</h3>
            <div>
            <div className="flex text-sm ">
                <h5 className="font-medium">⭐{avgRatingString + " ratings"}</h5>
                <div className='mx-2 '>•</div>
                <h5 className="font-semibold">{sla.slaString}</h5>
            </div>
            </div>
            <h5 className="underline text-amber-600 font-normal">{cuisines.join(', ')}</h5>
            <h5>{areaName}</h5>
            
        </div>
    )
};

export const withPromotedlabel = (RestaurantCard) => {
    return (props) => {
    return <>
    <div>
    <label className="absolute bg-white ml-5 mt-3 p-1 rounded-sm">🟢</label>
    <RestaurantCard  {...props}/>
    </div>
    </>
    }
}

export default RestaurantCard;