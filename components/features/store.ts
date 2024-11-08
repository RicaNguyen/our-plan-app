import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice"; // Adjust the import path

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
