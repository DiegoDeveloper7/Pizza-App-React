// context/CartProvider.jsx
import { createContext, useContext, useReducer } from "react";
import { pizzaCart } from "../helpers/pizzas";

// Estado inicial
const initialState = {
  cart: pizzaCart,
};

// Reducer para manejar acciones
const cartReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((pizza) =>
          pizza.id === action.payload
            ? { ...pizza, count: pizza.count + 1 }
            : pizza
        ),
      };

    case "DECREASE":
      return {
        ...state,
        cart: state.cart
          .map((pizza) =>
            pizza.id === action.payload
              ? { ...pizza, count: pizza.count - 1 }
              : pizza
          )
          .filter((pizza) => pizza.count > 0),
      };

    default:
      return state;
  }
};

// Crear contexto
const CartContext = createContext();

// Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Calcular total
  const total = state.cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        total,
        increaseCount: (id) => dispatch({ type: "INCREASE", payload: id }),
        decreaseCount: (id) => dispatch({ type: "DECREASE", payload: id }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para consumir contexto
export const useCart = () => useContext(CartContext);