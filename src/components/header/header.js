import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Header = ({ currentUser, cart }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">Shop</Link>
                <Link to="/shop" className="option">Contact</Link>
                {
                    currentUser
                        ? <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                        : <Link to="/signin" className="option">Sign In</Link>
                }
                <CartIcon />
            </div>
            {!cart ? <CartDropdown /> : null}
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    cart: state.cart.hidden
});

export default connect(mapStateToProps)(Header);