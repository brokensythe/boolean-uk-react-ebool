import SingleProduct from "./SingleProduct"
import { useParams } from "react-router-dom"
import useProducts from "../hooks/useProducts"

function Products() {
  const products = useProducts()
  const { categoryId } = useParams()

    return <section className="products-container main-wrapper">
      <ul className="products-container__list">
        {
          categoryId ? 
          products.filter(product=>product.categoryId===parseInt(categoryId)).map(product=><SingleProduct id={product.id} image={product.image} title={product.title} />) :
            products.map(product=><SingleProduct id={product.id} image={product.image} title={product.title} />)
        }
      </ul>
    </section>
  
}

export default Products