import React from "react";
import Button from "../button/button.component";
import "./product-card.styles.scss"
import { useContext } from "react";
import { DropDownBoxContext } from "../context/dropdownContext";
const ProductCard = ({products})=>{
    const {addItemToCart} = useContext(DropDownBoxContext)
    const {name,price,imageUrl} = products

    const addProductToCar = ()=> addItemToCart(products)
    return(
        <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">

            <span className="name">{name}</span>
            <span className="price">{price}</span>

        </div>

            <Button buttonType='inverted' onClick ={addProductToCar} >Add to card</Button>


        </div>
    )

}
export default ProductCard