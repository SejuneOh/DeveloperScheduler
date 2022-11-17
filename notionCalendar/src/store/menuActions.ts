import menuSlice from "./menuSlice";

export const menuActions = menuSlice.actions;

export const changeMenu = (idx: number) => {
  return (dispatch: any, getState: any) => {
    const currentMenu = getState().menu.currentMenu;

    if (currentMenu === idx) return;

    dispatch(menuActions.chageMenu(idx));
  };
};
