
import React, { createContext, useContext, useReducer } from "react";
const CartContext = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case "ADD":
      const exists = state.find(i=>i.id===action.payload.id);
      if(exists){
        return state.map(i=> i.id===action.payload.id ? {...i, qty:i.qty+1} : i);
      }
      return [...state, {...action.payload, qty:1}];
    case "REMOVE":
      return state.filter(i=>i.id!==action.payload);
    default:
      return state;
  }
};

export const CartProvider = ({children}) => {
  const [cart, dispatch] = useReducer(reducer, []);
  return <CartContext.Provider value={{cart, dispatch}}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
