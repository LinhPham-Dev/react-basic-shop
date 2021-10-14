export const addItemToCart = (cartItems, newItem) => {
	const existingCartItem = cartItems.find((item) => item.id === newItem.id);

	if (existingCartItem) {
		return cartItems.map((item) =>
			item.id === newItem.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);
	}

	return [...cartItems, { ...newItem, quantity: 1 }];
};

// Reduce quantity
export const reduceItemQuantity = (cartItems, cartItemChange) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemChange.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(
			(cartItem) => cartItem.id !== cartItemChange.id
		);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemChange.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

// Increment quantity
export const incrementItemQuantity = (cartItems, cartItemChange) => {
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemChange.id
			? { ...cartItem, quantity: cartItem.quantity + 1 }
			: cartItem
	);
};
