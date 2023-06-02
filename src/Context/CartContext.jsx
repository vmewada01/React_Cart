import { createContext, useState } from "react";

export const  CartContext = createContext()

export  function CartContextProvider({children}){
 
    const [cart, setCart]= useState({
        url:"",
        category:"",
        price:""
    })
   const [cartData, setCartData]= useState([])
//console.log(cart)


    return (
        <CartContext.Provider value={{cart, setCart, cartData,setCartData}}>
            {children}
        </CartContext.Provider>
    )
}

