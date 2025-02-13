import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setbtnName] = useState("Login/Signup");

    const onlineStatus = useOnlineStatus();

    //subscribing to the store using selector. It gives the access to the store
    const cartItems = useSelector((store) => store.cart.items);
    const userData = useContext(UserContext);

    return (
        <div  className="flex rounded-l-full justify-between p-2 m-1.5 border-1 bg-indigo-200 shadow-lg ">
            <Link to="/"><img className="w-30 rounded-full" alt="logo" src= {LOGO_URL} /></Link>
            <div className="flex w-200">
                <div className="flex items-center">
                    <p  className="flex w-35">Online status : {onlineStatus ? "🟢": "🔴"}</p>
                </div>
                <div className="flex w-165 justify-evenly items-center">
                    <Link to="/"><button 
                        className="hover:bg-indigo-300 hover:text-white shadow-lg p-1.5 rounded-md cursor-pointer"
                        >Home</button>
                    </Link>

                    <Link to="/grocery"><button 
                        className="hover:bg-indigo-300 hover:text-white shadow-lg p-1.5 rounded-md cursor-pointer"
                        >Grocery</button>
                    </Link>

                    <Link to="/About"><button 
                        className="hover:bg-indigo-300 hover:text-white shadow-lg p-1.5 rounded-md cursor-pointer"
                        >About Us</button>
                    </Link>

                    <Link to="/Contact"><button 
                        className="hover:bg-indigo-300 hover:text-white shadow-lg p-1.5 rounded-md cursor-pointer"
                        >Contact Us</button>
                    </Link>

                    <Link to="/Cart">{cartItems.length == 0 ?
                    <div 
                        className="hover:bg-indigo-300 hover:text-white shadow-lg p-1.5 rounded-md cursor-pointer"
                        >Cart🛒({cartItems.length})
                    </div> : 
                    <div
                        className="hover:bg-indigo-300 hover:text-white shadow-lg p-1.5 rounded-md cursor-pointe font-bold"
                        >Cart🛒({cartItems.length})
                    </div>
                    }</Link>
                    

                    {btnName == "Logout" && 
                        <div 
                            className="font-medium">{userData.LoggedinUser}
                        </div>
                    }

                    <button 
                        className="shadow-xl p-1.5 rounded-md cursor-pointer bg-indigo-700 color text-amber-50 hover:bg-white hover:text-indigo-700 hover:font-semibold"
                        onClick={()=>{btnName==="Logout"? setbtnName("Login") : setbtnName("Logout")}}
                    >{btnName}</button>

                </div>
            </div>
        </div>
    )
}

export default Header;