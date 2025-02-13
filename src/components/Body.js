import RestaurantCard, { withPromotedlabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [filterResList, setfilterResList] = useState([]);
  const [searchInput, setsearchInput] = useState("");

  const RestaurantCardPromoted = withPromotedlabel(RestaurantCard);

  const { LoggedinUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4743207&lng=77.508911&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restuarants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
        //   console.log(json);
      if (restuarants) {
        setresList(restuarants);
        setfilterResList(restuarants);
      } else {
        console.log("Unexpected JSON structure", json);
      }
    } catch (err) {
      console.log("Failed to fetch Data", err);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <>
        <h1>Looks like you are offline!!</h1>
        <h1>Please check your internet connection Bitch.</h1>
      </>
    );
  }

  function handlefilterbtn() {
    const newList = resList.filter((res) => res.info.avgRating >= 4);
    setfilterResList(newList);
  }

  function handleRemoveFilterBtn() {
    setfilterResList(resList);
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="flex justify-center my-8">
        <input
          className="mr-3 bg-amber-100 w-100 h-9 p-2 rounded-md hover:border-1"
          type="text"
          placeholder="Search Your 'Favourite Restaurant' Here"
          value={searchInput}
          onChange={(e) => {
            setsearchInput(e.target.value);
          }}
        />
        <button
          className="cursor-pointer border-1 h-8 px-2 rounded-sm bg-amber-400 hover:bg-amber-500"
          onClick={() => {
            console.log(searchInput);
            const newList = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchInput.toLowerCase())
            );
            if (newList.length === 0) {
              alert("No restaurants found with the given search input");
            } else {
              setfilterResList(newList);
            }
          }}
        >
          Search
        </button>
      </div>

      <div className="mb-4">
        <button
          className="border-1 ml-15 text-sm bg-gray-300 rounded-xs px-1 cursor-pointer"
          onClick={() => handlefilterbtn()}
        >
          Top Rated Restaurants
        </button>

        <button
          className="border-1 ml-3 text-sm bg-gray-300 rounded-xs px-1 cursor-pointer"
          onClick={() => handleRemoveFilterBtn()}
        >
          Remove Filter
        </button>
        <label className="ml-4 font-medium">Username:</label>
        <input
          className="p-1 ml-2 text-sm bg-gray-300 rounded-xs px-1 cursor-pointer"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap p-5">
        {filterResList.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={"http://localhost:1234/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
