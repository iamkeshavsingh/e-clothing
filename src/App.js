import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import Auth from './pages/auth/auth';
import { auth, storeUser } from './firebase/firebase.util';
import { setCurrentUser } from './store/user/user.action';
import Checkout from './pages/checkout/checkout';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await storeUser(userAuth);
        userRef.onSnapshot(snapShot => {
          const userSnap = {
            id: snapShot.id,
            ...snapShot.data()
          };
          this.props.setCurrentUser(userSnap);
        });
      }
      else {
        this.props.setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/signin" render={() => this.props.currentUser ? <Redirect to='/' /> : <Auth />} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
