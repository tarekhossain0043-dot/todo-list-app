import { createContext, useContext, useReducer } from "react";

// cart context
export const CartContext = createContext();

// initalState Value
const initalState = {
  cart: [],
};

// reducer function like (add,remove,total)
function cartReducer(state, action) {
  //switch for multiple functions
  switch (action.type) {
    // Add Case
    case "ADD_ITEM":
      const existing = state.cart.find((item) => item.id === action.payload.id);
      if (existing) {
        // if id is matching then increase the quantity value
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // if not then added new item on cart
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    // Remove case
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "DECREASE_ITEM":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}
// Context Provider
export function CartProvider({ children }) {
  // useReducer Hook for multiple condetion like .. add,edit,delete,total
  const [state, dispatch] = useReducer(cartReducer, initalState);

  // Total Calculation of cart
  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch, total }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook
export const useCart = () => useContext(CartContext);
