import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface IMenu {
  menuList: Array<string>;
  currentMenu: number;
}

const initState: IMenu = {
  menuList: ["Main", "Goals", "Projects", "Actions"],
  currentMenu: 0,
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initState,
  reducers: {
    chageMenu(state, action: PayloadAction<number>) {
      state.currentMenu = action.payload;
    },
  },
});

export default menuSlice;
