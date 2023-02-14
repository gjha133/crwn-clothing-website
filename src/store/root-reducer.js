import { combineReducers } from "redux";    // method for final big reducer

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
    user : userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})