import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
import Button from "../button/button.component";
import "./cart-shoppin.scss"
const CartShopping = () =>{

    return(
        <div className="cart-icon-container">
        <Button buttonType='inverted'><FontAwesomeIcon icon={solid("bag-shopping")} size='2x' /></Button>
            
            <span className="item-count">0</span>

        </div>


    )


}

export default CartShopping