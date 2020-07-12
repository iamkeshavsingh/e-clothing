import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import Auth from './pages/auth/auth';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Auth} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
