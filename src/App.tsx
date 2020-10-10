import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products" component={ProductPage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
};

export default App;