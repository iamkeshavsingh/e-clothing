import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCart } from '../../store/cart/cart.action';
import { selectCountCartItems } from '../../store/cart/cart.selectors';

const CartIcon = ({ toggleCart, totalItems }) => {
    return (
        <div className="cart-icon" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{totalItems}</span>
        </div>
    );
};

const mapStateToProps = state => ({
    totalItems: selectCountCartItems(state)
});

const mapDispatchToProps = (dispatch) => ({
    toggleCart: () => dispatch(toggleCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);