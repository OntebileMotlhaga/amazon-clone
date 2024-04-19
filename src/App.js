import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Product";
import Header from "./Components/Layout/Header";

import Login from "./Components/Login";
import ProductsDetails from "./Components/ProductsDetails";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductsDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
