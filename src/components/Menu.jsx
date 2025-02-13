import React, {useState} from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useMenu from '../utils/useMenu';
import RestaurantCategory from './RestaurantCategory';

const Menu = () => {

  const [showIndex, setshowIndex] = useState(null);

  const {resID} = useParams();
  const resinfo = useMenu(resID);
 
  const {name, costForTwoMessage, cuisines, avgRating, totalRatings, locality, city } = resinfo?.cards[2]?.card?.card?.info || {};
  const {itemCards} = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card   || {};

  const categories = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (resinfo == null )? <Shimmer/> : (<>

      <div className='flex justify-center mt-10 mb-5 ml-5 text/20'>
        <div className=' w-200'>
          <h1 className='font-extrabold text-2xl'>{name}</h1>
          <div className='font-semibold underline text-amber-600'>{cuisines.join(" , ")}</div>
          <div className='flex'>
            <div className='font-semibold'>⭐{avgRating + " (" + totalRatings + "+ ratings) "}</div>
            <div className='mx-2'>•</div>
            <div className='font-semibold'>{costForTwoMessage}</div>            
          </div>
          <div className='flex'>
            <div className='font-semibold mr-2'>Location: </div>
            <div className='font-light'>{locality + ", " + city}</div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-center '>

        {categories.map((c, index) => 
        //controlled component
        <RestaurantCategory
              info = {c}
              key={c.card?.card?.categoryId}
              showItems = {index == showIndex? true : false}
              setshowIndex = {()=>setshowIndex(index)}
              />                 
        )}
      </div>
      
      {/* <div className='flex flex-wrap justify-center'>
            {
              itemCards.map((item) => <ItemCard key={item.card.info.id} menuItem={item} />)
            }
      </div> */}
    </>
  )
};

export default Menu;