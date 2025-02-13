import { useDispatch, useSelector, } from "react-redux";
import {clearCart, removeItem} from "../utils/cartSlice"
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const handleremoveItem = () => {
    dispatch(removeItem())
  }

  return (
    <>
    <div className=" flex justify-center">
    <div className="">
        <div className="text-center text-2xl font-bold my-5">My Cart</div>

        {cartItems.length != 0 &&
        <div>
          <button 
          className="text-lg mb-5 mt-2 border-1 px-2 py-1 font-semibold text-white rounded-xl cursor-pointer bg-indigo-400"
          onClick={handleClearCart}
          >Clear Cart</button>
        </div>
        }

        { cartItems.length != 0 ? cartItems.map((i) => (
          <CartItem menuItem={i.menuItem} key={i.menuItem.card.info.id} handleremoveItem={handleremoveItem}/>
        )):
        <div className="font-medium text-lg">Nothing inside your cart, Add something bitch...</div>
      }
      </div>
    </div>
    </>
  );
};

export default Cart;
