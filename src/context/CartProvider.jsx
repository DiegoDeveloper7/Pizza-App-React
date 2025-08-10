// context/CartProvider.jsx
import { createContext, useContext, useReducer } from "react";
// import { pizzaCart } from "../helpers/pizzas"; // ← Ya no lo usamos para inicializar el carrito

// Estado inicial: carrito vacío
const initialState = {
  cart: [],
};

// Reducer para manejar acciones
const cartReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE": {
      const pizzaExists = state.cart.find((pizza) => pizza.id === action.payload.id);

      if (pizzaExists) {
        // Si ya existe, incrementa
        return {
          ...state,
          cart: state.cart.map((pizza) =>
            pizza.id === action.payload.id
              ? { ...pizza, count: pizza.count + 1 }
              : pizza
          ),
        };
      } else {
        // Si no existe, agregarla con count 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, count: 1 }],
        };
      }
    }

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
        increaseCount: (pizza) => dispatch({ type: "INCREASE", payload: pizza }),
        decreaseCount: (id) => dispatch({ type: "DECREASE", payload: id }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para consumir contexto
export const useCart = () => useContext(CartContext);