import { configureStore } from "@reduxjs/toolkit";
import auth from "../reducers/reducer";

const store = configureStore({
  reducer: auth,
});

export default store;
