import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1
    }));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      const info = food_list.find(p => p._id === item);
      if (info) total += info.price * cartItems[item];
    }
    return total;
  };

  return (
    <StoreContext.Provider value={{
      food_list,
      cartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
