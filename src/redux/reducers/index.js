import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import alertReducer from './alert.reducer';
import productReducer from './product.reducer';
import storeReducer from './store.reducer';
import cartReducer from './cart.reducer';
import settingsReducer from './settings.reducer';
import orderReducer from './order.reducer';
import wishListReducer from './wishlist.reducer';
export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  product: productReducer,
  merchant_store: storeReducer,
  cart: cartReducer,
  settings: settingsReducer,
  orders: orderReducer,
  wishList: wishListReducer,
});
