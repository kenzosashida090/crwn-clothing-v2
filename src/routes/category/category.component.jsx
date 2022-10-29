import "./category.styles.scss"
import { useEffect,useState,useContext } from "react"
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../components/context/categories.context"
import ProductCard from "../../components/productCard/productCard.component"
const Category = ()=>{
    const {categoriesMap} = useContext(CategoriesContext)
    const {category} = useParams()
    const [products,setProducts] = useState(categoriesMap[category])
    
    useEffect(()=>{
        setProducts(categoriesMap[category])

    },[category,categoriesMap]

    )

    return(
        <>
        <h2 className="category-title">{category.toUpperCase()}</h2>
        <div className="category-container">
        {
            products &&
            products.map((product)=> <ProductCard key={product.id} products={product}/>)
        }
            
        </div>
        </>
    )

}
export default Category