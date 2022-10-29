
import Button,{Button_Type_Class} from "../button/button.component"
import CartItem from "../cart-itme/cartItme.component"
import { useContext } from "react"
import { CartDropDownContainer,CartItems,EmptyMessage } from "./cart-dropdown.stule"
import {useNavigate} from "react-router-dom";
import { DropDownBoxContext } from "../context/dropdownContext"
import CheckOut from "../../routes/checkout/checkout.component"
const CartDropdown = ()=>{
    const {cartItems } = useContext(DropDownBoxContext)
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/checkout')

    }
return(
    <CartDropDownContainer>
    <CartItems>
    {
        cartItems.length ?   (cartItems.map((item) =>( <CartItem key={item.id} CartItem={item}/>)))  :
        (
            <span>YOUR CART IS EMPTY</span>

        )
    }
    
    </CartItems>

    <Button buttonType={Button_Type_Class.inverted} onClick = {handleClick}>
    GO TO CHECKOUT
    </Button>



    </CartDropDownContainer>

)


}
export default CartDropdown