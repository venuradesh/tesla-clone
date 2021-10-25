import { configureStore } from "@reduxjs/toolkit";
import NavMenu from "../features/HeaderSlice/NavMenu";

export const store = configureStore({
  reducer: {
    resMenu: NavMenu,
  },
});
