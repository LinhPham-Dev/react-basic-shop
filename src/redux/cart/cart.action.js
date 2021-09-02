import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addNewItem = (item) => ({
	type: CartActionTypes.ADD_NEW_ITEM,
	payload: item,
});

// Increment quantity
export const incrementQuantity = (item) => ({
	type: CartActionTypes.PLUS_QUANTITY,
	payload: item,
});

// Reduce quantity
export const reduceQuantity = (item) => ({
	type: CartActionTypes.MINUS_QUANTITY,
	payload: item,
});

export const deleteItem = (item) => ({
	type: CartActionTypes.DELETE_ITEM,
	payload: item,
});
