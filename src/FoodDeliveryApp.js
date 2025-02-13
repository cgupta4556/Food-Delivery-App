import React, {useState, useEffect, lazy, Suspense} from "react";
import ReactDOM from 'react-dom/client';
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact"
import Error from "./components/Error";
import Menu from "./components/Menu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import ItemCard from "./components/ItemCard";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Grocery = lazy(()=> import("./components/Grocery"));

const App = () => {

    const [userName, setUserName] = useState();

    //authentication  
    useEffect(()=>{
        //API calling and getting the user details
        const data = {
            name: "Welecome, Chandan",
        };
        setUserName(data.name)
    },[])

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{LoggedinUser:userName, setUserName}}>
        <div>
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/About',
                element: <About/>
            },
            {
                path: '/Contact',
                element: <Contact/>
            },
            {
                path: '/menucard',
                element: <ItemCard/>
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<Shimmer></Shimmer>} ><Grocery/></Suspense>,
            },
            {
                path: '/Restaurant/:resID',
                element: <Menu/>
            },
            {
                path: '/Cart',
                element: <Cart/>
            }
        ]
    }
]);

root.render(<RouterProvider router={appRouter}/>);
