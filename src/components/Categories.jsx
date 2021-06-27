import { Link } from "react-router-dom"

function Categories() {
  const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

  function handleMouseOver(e) {
    e.target.style.backgroundColor = "#fff"
    e.target.style.color = `${randColour()}`
  }

  function handleMouseOut(e) {
    e.target.style.backgroundColor = `${randColour()}`
    e.target.style.color = "#fff"
  }

    return <main>
    <section className="categories-container main-wrapper">
      <ul className="categories-container__list">
        {/* <!-- Single category --> */}
        <li>
          {/* <!-- Use the Link component from React Router to create 
                the anchor tags
          --> */}
          <Link to="/categories/1" style={{backgroundColor : `${randColour()}`}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>electronics</Link>
        </li>
        {/* <!--  --> */}
        <li>
          <Link to="/categories/2" style={{backgroundColor : `${randColour()}`}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>jewelery</Link>
        </li>
        {/* <!--  --> */}
        <li>
          <Link to="/categories/3" style={{backgroundColor : `${randColour()}`}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>men's clothing</Link>
        </li>
        {/* <!--  --> */}
        <li>
          <Link to="/categories/4" style={{backgroundColor : `${randColour()}`}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>women's clothing</Link>
        </li>
        {/* <!--  --> */}
      </ul>
    </section>
  </main>
//   
}

export default Categories