// - Use this starting template => https://codesandbox.io/s/react-routes-ebool-sarter-template-v2otu
// - Start your json-server with json-server --watch db/db.json -p 4000
// - The templates folder has a template for each page you have to build
// - There's a folder with screenshots of each page you have to build
// - The app should have 3 main routes: products, categories, basket
// - When a user lands on the app, it should be redirected to the products route
// - Make sure you have dynamic routes for the products detail page once a user clicks on a product card
// - Inside the Categories, each category should lead to a filtered version of the products page
// - The add to basket button on the Products Details page shout add the item to the basket, and take you to the basket page 

import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Basket from "./components/Basket";
import Products from "./components/Products";
import Categories from "./components/Categories";
import ProductPage from "./components/ProductPage";
import useBasket from "./hooks/useBasket";

function App() {

  const {basket, setBasket} = useBasket()

  return (
    <>
      <Header />
      <main>
        {
          <Switch>
            <Route path="/basket">
              <Basket basket={basket} setBasket={setBasket} />
            </Route>
            <Route path="/categories/:categoryId">
              <Products />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/products/:productId">
              <ProductPage basket={basket} setBasket={setBasket} />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Redirect to="/products"/>
            </Route>
          </Switch>
        }
      </main>
    </>
  );
}

export default App;
