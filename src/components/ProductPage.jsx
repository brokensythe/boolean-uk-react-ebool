import useProduct from "../hooks/useProduct"
import { Link } from "react-router-dom"

function ProductPage({ basket, setBasket }) {
  const product = useProduct()

  function postToBasket(e) {
    const basketItem = {
      title: product.title,
      image: product.image,
      quantity: 1,
      price: product.price
    }

      fetch("http://localhost:4000/basket", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(basketItem)
      })
      .then(resp=>resp.json())
      .then(data=>setBasket([...basket, data]))
  }

  function patchToBasket(e) {

    const currentItem = basket.find(basketItem=>product.title===basketItem.title)

      fetch(`http://localhost:4000/basket/${currentItem.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quantity: currentItem.quantity + 1 })
      })
      .then(resp=>resp.json())
      .then(data=>setBasket([...basket.filter(basketItem=>basketItem.id!==data.id), data].sort((a, b) => a.id - b.id)))
  }

  function productCheck() {
    return basket.map(basketItem=>basketItem.title).includes(product.title)
  }

  return product ? <main>
    <section className="product-detail main-wrapper">
      <img
        src={product.image}
        alt={product.title}
      />
      <div className="product-detail__side" style={{ borderColor : `yellow` }}>
        <h2>{product.title}</h2>
        <p>
          {product.description}
        </p>
        <p>{`£${product.price}`}</p>
        {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
        <Link to="/basket">
          <button onMouseDown={productCheck() ? patchToBasket : postToBasket}>Add to basket</button>
        </Link>
      </div>
    </section>
  </main> : <main>
    <section className="product-detail main-wrapper">
      <img
        src="Loading..."
        alt="Loading..."
      />
      <div className="product-detail__side" style={{borderColor: "var(--yellow);"}}>
        <h2>Loading...</h2>
        <p>
          Loading...
        </p>
        <p>Loading...</p>
        {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
          <button>Add to basket</button>
      </div>
    </section>
  </main>
}

export default ProductPage