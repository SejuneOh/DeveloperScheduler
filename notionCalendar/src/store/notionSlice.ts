import { IGoals, IProjects, IActions } from "./../interfaces/ICommon";
import { PayloadAction } from "./../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";

export interface INontionDatas {
  goals: Array<IGoals>;
  projects: Array<IProjects>;
  actions: Array<IActions>;
}

const initState: INontionDatas = {
  goals: [],
  projects: [],
  actions: [],
};

const notionSlice = createSlice({
  name: "notionDatas",
  initialState: initState,
  reducers: {
    setGoalsData(state, action: PayloadAction<Array<IGoals>>) {
      state.goals = action.payload;
    },
    setProjectsData(state, action: PayloadAction<Array<IProjects>>) {
      state.projects = action.payload;
    },
    setActionsData(state, action: PayloadAction<Array<IActions>>) {
      state.actions = action.payload;
    },
  },
});

export default notionSlice;
