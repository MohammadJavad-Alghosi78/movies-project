import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
// import searchReducer from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    // search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
