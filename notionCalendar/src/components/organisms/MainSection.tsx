import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import { changeMenu } from "../../store/menuActions";
import DataTable from "./DataTable";

const MainSectionStyle = styled.section`
  padding: 2rem;
`;

export default function MainSection() {
  //store data
  const goalsData = useAppSelector((state) => state.notionData.goals);
  const projectsData = useAppSelector((state) => state.notionData.projects);
  const actionsData = useAppSelector((state) => state.notionData.actions);
  const menu = useAppSelector((state) => state.menu.currentMenu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // 최초의 렌더링은 0번으로 초기화 한다.
    dispatch(changeMenu(0));
  }, []);

  return (
    <MainSectionStyle>
      {menu === 0 ? (
        <>
          {goalsData.length > 0 ? (
            <DataTable tableName="goals" data={goalsData} />
          ) : null}
          {projectsData.length ? (
            <DataTable tableName="projects" data={projectsData} />
          ) : null}
          {actionsData.length ? (
            <DataTable tableName="actions" data={actionsData} />
          ) : null}
        </>
      ) : null}

      {menu === 1 ? (
        <>
          {goalsData.length > 0 ? (
            <DataTable tableName="goals" data={goalsData} />
          ) : null}
        </>
      ) : null}

      {menu === 2 ? (
        <>
          {projectsData.length ? (
            <DataTable tableName="projects" data={projectsData} />
          ) : null}
        </>
      ) : null}
      {menu === 3 ? (
        <>
          {actionsData.length ? (
            <DataTable tableName="actions" data={actionsData} />
          ) : null}
        </>
      ) : null}
    </MainSectionStyle>
  );
}
