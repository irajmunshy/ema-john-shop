import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import NotPound from './components/NotPound/NotPound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
            <Manage></Manage>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotPound></NotPound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
