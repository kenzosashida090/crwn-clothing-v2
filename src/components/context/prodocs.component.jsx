import { createContext } from "react";
import { useEffect } from "react"
import { useState } from "react"
import { onAuthStateChangedListener } from "../../utils/firebase/firebase.utils"
import Products from "../../shop-data.json"
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
export const  ProductsContext = createContext({
    products :[ ],
    currentProducts : null,


})

export const ProductsProvider = ({children})=>{


    const [products,setProducts] = useState(Products)

    const value = {products}

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}