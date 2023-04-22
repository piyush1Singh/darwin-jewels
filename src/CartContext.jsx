import React, { createContext, useState } from 'react';
import axios from 'axios';

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [quantity, setQuantity] = useState();

  const saveToCart = async (e,productId) => {
    
    axios.post(
      'http://localhost/darwin-jewels/Admin-panel/Api-Calls/Cart/addProducttoCart.php',
      {
        id: productId,
        quantity: quantity,
      },
      {
        withCredentials: true, // enable cookies/session support
      }
    )
      .then(response => {
        // handle the response here
        console.log(response.data);
      })
      .catch(error => {
        // handle the error here
        console.error(error);
      });
  };

  return (
    <CartContext.Provider value={{ quantity, saveToCart,setQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;