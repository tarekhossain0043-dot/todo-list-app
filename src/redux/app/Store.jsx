import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "../features/carts/CartSlice";
// import productSlice from "../features/products/ProductSlice";
import rootReducer from "../features/rootReducer";

// localstorage default engine
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

// persist configure
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["product", "cart"],
};

const persistReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: {
  //   product: productSlice,
  //   cart: cartSlice,
  // },
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export default store;
export const persistor = persistStore(store);
