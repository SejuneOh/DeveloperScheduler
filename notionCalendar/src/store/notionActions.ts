import { getNotionAllData } from "../api/serverAPI";
import { IActions, IGoals, IProjects } from "../interfaces/ICommon";
import notionSlice from "./notionSlice";

export const notionActions = notionSlice.actions;

export const funcGetNotionData = () => {
  return async (dispatch: any, getState: any) => {
    const data = await getNotionAllData();

    // binding data value
    let goalsData: Array<IGoals> = [];
    let projectsData: Array<IProjects> = [];
    let ActionsData: Array<IActions> = [];

    // 데이터가 없으면 return
    if (!data) return;

    // console.log(data);

    // item 분리
    for (let item of data) {
      switch (item.id) {
        case import.meta.env.VITE_NOTION_GOALS_ID:
          const ret_1 = item.bindingData.map((el) => {
            const props = el.properties;
            const data: IGoals = {
              id: el?.id,
              properties: {
                Due_Date: {
                  start: props?.Due_Date.date.start,
                  type: props?.Due_Date.type,
                },
                Goals: {
                  text: props?.Goals.title[0].plain_text,
                  type: props?.Goals.type,
                },
                State: {
                  status: props?.State.status.name,
                  color: props?.State.status.color,
                  type: props?.State.type,
                },
                Type: {
                  name: props?.Type.select.name,
                  color: props?.Type.select.color,
                  type: props?.Type.type,
                },
                Year: {
                  name: props?.Year.select.name,
                  color: props?.Year.select.color,
                  type: props?.Year.type,
                },
              },
              Projects: props?.Projects.relation,
            };

            return data;
          });

          goalsData = ret_1;
          break;

        case import.meta.env.VITE_NOTION_PROJECTS_ID:
          const ret_2: Array<IProjects> = item.bindingData.map((el) => {
            const props = el.properties;

            // console.log(el);

            const data: IProjects = {
              id: el?.id,
              properties: {
                State: {
                  status: props?.State.status.name?.replace("\b", ""),
                  color: props?.State.status.color,
                  type: props?.State.type,
                },
                Name: {
                  text: props?.Name.title[0].plain_text,
                  type: props?.Name.type,
                },
                Goals: {
                  relation: props?.Goals.relation,
                  type: props.Goals.type,
                },
                Percent: {
                  number: props?.Percent.rollup.number
                    ? Math.floor(props.Percent.rollup.number * 100)
                    : 0,

                  type: props.Percent.type,
                },
              },
              Actions: props?.Actions.relation,
            };
            return data;
          });

          projectsData = ret_2;
          break;

        case import.meta.env.VITE_NOTION_ACTIONS_ID:
          const ret_3: Array<IActions> = item.bindingData.map((el) => {
            const props = el.properties;
            const data: IActions = {
              id: el?.id,
              properties: {
                Name: {
                  text: props?.Name.title[0].plain_text,
                  type: props?.Name.type,
                },
                Date: {
                  start: props?.Date.date.start,
                  type: props?.Date.type,
                },
                Done: {
                  checkbox: props?.Done.checkbox,
                  type: props.Done.type,
                },
                Projects: {
                  relation: props?.Projects.relation,
                  type: props?.Projects.type,
                },
              },
            };

            return data;
          });

          ActionsData = ret_3;
          break;
      }
    }

    //데이터 바인딩
    dispatch(notionActions.setGoalsData(goalsData));
    dispatch(notionActions.setProjectsData(projectsData));
    dispatch(notionActions.setActionsData(ActionsData));
  };
};
