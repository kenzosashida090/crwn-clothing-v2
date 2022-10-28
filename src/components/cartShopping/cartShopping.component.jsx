import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon, light } from '@fortawesome/fontawesome-svg-core/import.macro' 
import Button from "../button/button.component";
import { useContext, useState } from "react";
import { DropDownBoxContext } from "../context/dropdownContext";
import "./cart-shoppin.scss"
const CartShopping = () =>{
    const {isCartOpen,setIsCartOpen,cartCount} = useContext(DropDownBoxContext)
    const toggleCart = ()=> setIsCartOpen(!isCartOpen)
    return(
        <div className="cart-icon-container" onClick={toggleCart}>
      
         <FontAwesomeIcon className="icon-awesome" size="3x" icon={solid("bag-shopping") }  />
            
            <span className="item-count">{cartCount}</span>

        </div>


    )


}

export default CartShopping