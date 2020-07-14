import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.scss';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../store/cart/cart.selectors';
import { toggleCart } from '../../store/cart/cart.action';


const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map(item => <CartItem key={item.id} item={item} />) :
                        <span className="empty-message">Your Cart Is Empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCart())
            }}>Go To Checkout</CustomButton>
        </div>
    );
};

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});


export default withRouter(connect(mapStateToProps)(CartDropdown));