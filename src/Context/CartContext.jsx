import { createContext, useState } from "react";

export const  CartContext = createContext()

export  function CartContextProvider({children}){
 
    const [cart, setCart]= useState({
        url:"",
        category:"",
        price:""
    })
    const setCartItems= (image_url,category,price)=>{
        setCart({
            ...cart,
            url: image_url,
            category: category,
            price: price
        })
    }
//console.log(cart)


    return (
        <CartContext.Provider value={{cart, setCart, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}

