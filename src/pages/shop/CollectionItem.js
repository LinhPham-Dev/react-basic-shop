import React from "react";
import { connect } from "react-redux";
import CustomButton from "../../components/custom-button/CustomButton";
import { addNewItem } from "../../redux/cart/cart.action";
import "./collection-item.scss";

function CollectionItem({ item, addNewItem }) {
	const { imageUrl, name, price } = item;

	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<CustomButton onClick={() => addNewItem(item)} inverted>
				ADD TO CART
			</CustomButton>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	addNewItem: (item) => dispatch(addNewItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
