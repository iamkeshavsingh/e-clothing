import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.scss';

import { removeFromCart, addItem, removeItem } from '../../store/cart/cart.action';

const CheckoutItem = ({ cartItem, removeItem, addItem, removeAItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeAItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeAItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);