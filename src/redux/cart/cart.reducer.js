import { CartActionTypes } from "./cart.types";
import {
	addItemToCart,
	reduceItemQuantity,
	incrementItemQuantity,
} from "./cart.utils";

const INITIAL_STATE = {
	hidden: false,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};

		case CartActionTypes.ADD_NEW_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};

		case CartActionTypes.MINUS_QUANTITY:
			return {
				...state,
				cartItems: reduceItemQuantity(state.cartItems, action.payload),
			};

		case CartActionTypes.PLUS_QUANTITY:
			return {
				...state,
				cartItems: incrementItemQuantity(
					state.cartItems,
					action.payload
				),
			};

		case CartActionTypes.DELETE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item) => item.id !== action.payload.id
				),
			};

		default:
			return state;
	}
};

export default cartReducer;
