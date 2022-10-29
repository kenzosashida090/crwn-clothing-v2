
import React, { Fragment } from "react";
import { CategoriesContext } from "../../components/context/categories.context";
import { useContext } from "react";

import CategoryPreview from "../../components/category-preview-component/categoryPreview.component";

const CategoriesPreview = ()=>{

    const {categoriesMap} =useContext(CategoriesContext)
    return(
            <>
            {Object.keys(categoriesMap).map((title)=>{
                const products = categoriesMap[title]
                return <CategoryPreview key={title} title={title} products={products}/>

            })}
        
            </> 
    )


}

export default CategoriesPreview