import React from "react";
import { connect } from "react-redux";
import { deleteItem, incrementQuantity, reduceQuantity } from "../../redux/cart/cart.action";

import "./checkout-item.scss";

const CheckoutItem = ({ cartItem, removeItem, increment, reduce}) => {
    const {name, imageUrl, price, quantity} = cartItem;

	return (
		<div className="checkout-item">
			<div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div className="arrow" onClick={() => reduce(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow"  onClick={() => increment(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
    removeItem: item => dispatch(deleteItem(item)),
    increment: item => dispatch(incrementQuantity(item)),
    reduce: item => dispatch(reduceQuantity(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
