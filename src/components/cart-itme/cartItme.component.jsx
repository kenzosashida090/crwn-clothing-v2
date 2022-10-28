import './cart-item.scss'

const CartItem = ({CartItem})=>{
const {name,quantity,price,imageUrl} = CartItem


return(

    <div className='cart-item-container'>
    <img src={imageUrl} name={`${name}`}/>
        <div className='item-details'>
        <span className='name'> {name} </span>
        <span className='price'>
        {quantity} x ${price}
        
        </span>
        </div>
        
    </div>
)


}

export default CartItem