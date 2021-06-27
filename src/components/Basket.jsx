import BasketItem from "./BasketItem"

function Basket({ basket, setBasket }) {
  let total = 0
  for (const item of basket) {
    total += (item.quantity * item.price)
  }
    return <main>
    <section className="basket-container">
      <h2>Your Basket</h2>
      <ul>
          {
            basket.map(item=><BasketItem image={item.image} title={item.title} price={item.price} quantity={item.quantity} setBasket={setBasket} id={item.id} basket={basket} />)
          }
      </ul>
      {/* <!-- Basket total is calculated using each item's total from above --> */}
      <h3>{`Your total: £${total.toFixed(2)}`}</h3>
    </section>
  </main>
  
}

export default Basket