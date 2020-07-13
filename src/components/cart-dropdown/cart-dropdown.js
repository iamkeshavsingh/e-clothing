import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.scss';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';


const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item.id} item={item} />)}
            </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems: cartItems
})

export default connect(mapStateToProps)(CartDropdown);