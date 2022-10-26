import React from "react";
import { ProductsContext } from "../../components/context/prodocs.component";
import { useContext } from "react";
import ProductCard from "../../components/productCard/productCard.component";
import "./shop.style.scss"
const Shop = ()=>{
const {products} =useContext(ProductsContext)
    return(
        <div className="shop-container">
            {products.map((product)=>(
                    
                    <ProductCard key={product.id} products={product} />
                    


    )     )}

        </div>

    )

}
export default Shop