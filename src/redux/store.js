import { configureStore } from "@reduxjs/toolkit";
import  counterSlice from "./services/ContactSlice";

export default configureStore({
  reducer: {
    contact:counterSlice
  },
});
