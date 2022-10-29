import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 
import Button from "../button/button.component";
import { useContext} from "react";
import { DropDownBoxContext } from "../context/dropdownContext";

import { CartIconContainer,ItemCount } from "./cart-shoppin";
const CartShopping = () =>{
    const {isCartOpen,setIsCartOpen,cartCount} = useContext(DropDownBoxContext)
    const toggleCart = ()=> setIsCartOpen(!isCartOpen)
    return(
        <CartIconContainer   onClick={toggleCart}>
      
         <FontAwesomeIcon className="icon-awesome" size="3x" icon={solid("bag-shopping") }  />
            
            <ItemCount>{cartCount}</ItemCount>

        </CartIconContainer>


    )


}

export default CartShopping