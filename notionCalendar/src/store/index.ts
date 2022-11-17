import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import notionSlice from "./notionSlice";

// store setting
const store = configureStore({
  reducer: {
    notionData: notionSlice.reducer,
    menu: menuSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
