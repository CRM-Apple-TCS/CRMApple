import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
