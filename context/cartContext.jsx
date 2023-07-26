import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cartItems")) || []
  );

  // Function to add an item to the cart
  const addToCart = (item) => {
    let id = cartItems.findIndex((e) => {
      return e.id === item.id;
    });
    if (id >= 0) {
      let arr = cartItems;

      (arr[id].quantity = arr[id].quantity + item.quantity),
        setCartItems([...arr]);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        setCartItems,
        modal,
        setModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
