 import "./checkout-item.style.scss"
 import { useContext } from "react"
 import { DropDownBoxContext } from "../context/dropdownContext"
 import "./checkout-item.style.scss"
const CheckOutItem = ({item})=>{
  
    const {name,imageUrl,price,quantity} = item
    const {deleteItemtoCart,removeItemToCart,addItemToCart} = useContext(DropDownBoxContext)

    const deleteProductToCar = ()=> deleteItemtoCart(item)
    return(
        <div className="checkout-item-container">

            <div className="image-container">
                    <img src={imageUrl} alt ={`${name}`}/>

            </div>
    
            <span className="name">{name} </span>
            <span className="quantity">
            <div className="arrow" onClick={()=>removeItemToCart(item)}> &#10094; </div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=>addItemToCart(item)}> &#10095; </div>
            
        
            </span>
            <span className="price">{price}</span>
      
            <div className="remove-buton" onClick={deleteProductToCar}>&#10005;</div>
            
        </div>

    )


}

export default CheckOutItem