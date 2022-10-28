import "./cart-dropdown.stule.scss"
import Button from "../button/button.component"
import CartItem from "../cart-itme/cartItme.component"
import { useContext } from "react"
import { Link } from "react-router-dom";
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
    <div className="cart-dropdown-container">

    <div className="cart-items">
    {cartItems.map((item) => <CartItem key={item.id} CartItem={item}/>)}
    </div>

    <Button buttonType='inverted' onClick = {handleClick}>
    GO TO CHECKOUT
    </Button>



    </div>

)


}
export default CartDropdown