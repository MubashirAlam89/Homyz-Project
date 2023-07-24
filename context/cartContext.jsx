import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState(0);
  const [shop, setShop] = useState([
    {
      id: 1,
      name: "",
      quantity: 0,
      itemImg: "",
      price: 0,
    },
    {
      id: 2,
      name: "",
      quantity: 0,
      itemImg: "",
      price: 0,
    },
    {
      id: 3,
      name: "",
      quantity: 0,
      itemImg: "",
      price: 0,
    },
    {
      id: 4,
      name: "",
      quantity: 0,
      itemImg: "",
      price: 0,
    },
    {
      id: 5,
      name: "",
      quantity: 0,
      itemImg: "",
      price: 0,
    },
    {
      id: 6,
      name: "",
      quantity: 0,
      itemImg: "",
      price: 0,
    },
  ]);

  return (
    <CartContext.Provider
      value={{ cart, setCart, shop, setShop, modal, setModal }}
    >
      {children}
    </CartContext.Provider>
  );
};
