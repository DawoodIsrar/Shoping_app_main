// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Products from "./pages/ProductList";
import Categories from "./components/Categories";

import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/product" component={Product} />
        <Route path="/products" component={Products} />
        <Route path="/categories" component={Categories} />

        <Route path="/cart" component={Cart} />


        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
