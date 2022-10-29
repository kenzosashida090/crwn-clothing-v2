import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react"

export const  addCartItem = (cartItems,productToAdd ) =>{

 const existingCartItem =  cartItems.find((items) => items.id === productToAdd.id)
        if (existingCartItem){
            return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
                    {...cartItem, quantity : cartItem.quantity +1}
                :

                    cartItem
            
            )

        }
        return [...cartItems,{...productToAdd,quantity:1}]
}

export const  removeCartItem = (cartItems,productToRemove ) =>{

    const existingCartItem =  cartItems.find((items) => items.id === productToRemove.id)
    
           if (existingCartItem.quantity  === 1){
               return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id  )
   
           }
        
           return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? 
           {...cartItem, quantity : cartItem.quantity - 1}
       :

           cartItem
           );
   }

export const deleteCartItem = (cartItems,productToRemove) =>{
    const existingCartItem =  cartItems.find((items) => items.id === productToRemove.id)

    if(existingCartItem){
        return cartItems.filter((cartItem)=> cartItem.id !== productToRemove.id)

    }

}

export const DropDownBoxContext = createContext({
    isCartOpen : false,
    setIsCartOpen : ()=>{},
    cartItems : [],
    addItemToCart : ()=>{},
    cartCount :0,
    removeItemToCart : ()=>{},
    deleteItemtoCart :()=>{},
    cartTotal :0 
  
})

export const DropBoxProvider = ({children}) =>{
    const [isCartOpen,setIsCartOpen] =useState(false);
    const [cartItems,setCartItems] = useState([])
    const [cartCount,setCartCount] =useState(0)
    const [cartTotal,setCartTotal] = useState(0)
    
    useEffect (()=>{
         const newCartCount =   cartItems.reduce((accumulator,cartItem)=>accumulator + cartItem.quantity,0)
        setCartCount(newCartCount)
    },[cartItems])

    useEffect (()=>{
        const newCartTotal =   cartItems.reduce((total,cartItem)=>total + cartItem.quantity * cartItem.price,0)
       setCartTotal(newCartTotal)
   },[cartItems])


    const addItemToCart = (productToAdd)=>{

       setCartItems(addCartItem(cartItems,productToAdd))
    }

    const removeItemToCart = (productoToRemove) =>{

        setCartItems(removeCartItem(cartItems,productoToRemove))
    }
    const deleteItemtoCart = (productoToRemove) =>{

        setCartItems(deleteCartItem(cartItems,productoToRemove))
    }
  
    const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,cartCount,removeItemToCart,deleteItemtoCart,cartTotal}
    return <DropDownBoxContext.Provider value={value}>{children}</DropDownBoxContext.Provider>
}

