import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
	key: "cart",
	storage,
	whitelist: ["cart"],
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	shop: shopReducer,
	directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
