function BasketItem({ image, title, price, quantity, setBasket, id, basket }) {

    let options = []

    function createOptions() {
        for (let index = 0; index < quantity + 11 ; index++) {
            options.push(<option value={index}>{index}</option>)
        }
        return options
    }

    function patchToBasket(e) {
          fetch(`http://localhost:4000/basket/${id}`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: parseInt(e.target.value) })
          })
          .then(resp=>resp.json())
          .then(data=>setBasket([...basket.filter(basketItem=>basketItem.id!==data.id), data].sort((a, b) => a.id - b.id)))
      }

    return  <li>
    <article className="basket-container__item">
      <img
        src={image}
        alt={title}
        width="90"
      />
      <p>{title}</p>
      <p>
        Qty:
        <select value={quantity} onChange={patchToBasket}
          >{
              createOptions().map(option=>option)
          }</select
        >
      </p>
      {/* <!-- The item total is calculated using the Qty selected value --> */}
      <p>{`Item total: £${(price * quantity).toFixed(2)}`}</p>
    </article>
  </li>
}

export default BasketItem