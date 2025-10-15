import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, dispatch, total } = useCart();

  return (
    <div className="bg-gray-50 shadow-sm shadow-gray-100 max-w-[260px] h-full transition-all ease-in-out px-4 pt-4 py-12">
      <Link to="/" className="text-red-400 font-primary cursor-pointer">
        Back to Product page
      </Link>
      <h2 className="font-primary text-black font-semibold text-[20px] mb-[40px] capitalize">
        Your Cart.
      </h2>
      <hr className="w-full h-[1px] bg-gray-50 shadow-sm my-4" />
      {cart.length === 0 && (
        <p className="text-black font-medium normal-case py-7">
          No item added here!
        </p>
      )}
      {/* show product if here */}
      {cart.map((item) => (
        <div key={item.id} className="grid grid-cols-6 gap-1">
          {console.log(item)}
          <img
            src={item.image}
            className="max-w-[120px] w-full h-[120px] object-cover"
          />
          <h4 className="font-primary text-black font-semibold capitalize">
            {item.names}
          </h4>
          <span className="font-primary text-black normal-case">
            $ {item.price}
          </span>
          <span className="font-primary text-black normal-case">
            {item.quantity}
          </span>
          <button
            onClick={() =>
              dispatch({ type: "DECREASE_ITEM", payload: item.id })
            }
            className="px-4 py-4 bg-gray-50 shadow-sm shadow-gray-100"
          >
            -
          </button>
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}
            className="px-4 py-4 bg-gray-50 shadow-sm shadow-gray-100"
          >
            +
          </button>
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
            className="px-4 py-4 bg-gray-50 shadow-sm shadow-gray-100"
          >
            Delete
          </button>
        </div>
      ))}
      <hr className="w-full h-[1px] bg-gray-50 shadow-sm my-4" />
      <div className="flex items-center justify-between px-3 py-2">
        {/* total amout */}
        <p>Your Total payable amout :</p>
        <span>{total}</span>
      </div>
      {/* clear cart */}
      {cart.length === 0 && (
        <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
          Clear Cart
        </button>
      )}
    </div>
  );
}
