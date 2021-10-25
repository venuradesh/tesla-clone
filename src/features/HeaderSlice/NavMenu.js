import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerMenu: ["model s", "model 3", "model x", "model y", "solar roof", "solar panels"],
};

const NavMenu = createSlice({
  name: "resMenu",
  initialState,
  reducers: {},
});

export const MenuSelector = (state) => state.resMenu.headerMenu;
export default NavMenu.reducer;
