import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/redux_hooks";
import { IGoals, IProjects } from "../../interfaces/ICommon";
import CheckboxCell from "./CheckboxCell";
import StatusCell from "./StatusCell";

interface IProps {
  isTitle: boolean;
  isEdit: boolean;
  data: any;
}

const SCell = styled.div`
  width: 100%;
  font-size: 18px;
  /* border: 1px solid white; */
  min-height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:first-child {
    &:last-child {
      justify-content: center;
      border-bottom: 1px solid white;
    }
  }

  .column_title {
    font-weight: 700;
    font-size: 1.2rem;
    /* border-bottom: 1px solid white; */
    padding: 2px;
  }
`;

export default function Cell({ isTitle, isEdit, data }: IProps) {
  const goalsData = useAppSelector((state) => state.notionData.goals);
  const projectData = useAppSelector((state) => state.notionData.projects);

  const fetchRelation = (id: string) => {
    let obj: IGoals | IProjects | null | undefined = null;

    let result = goalsData.find((el) => el.id === id)?.properties.Goals.text;

    if (!result) {
      result = projectData.find((el) => el.id === id)?.properties.Name.text;
    }

    return result;
  };

  const bindingData = () => {
    // 데이터가 없을 때,
    if (!data) return;

    // 컬럼의 타이틀 일때,
    if (isTitle) {
      return <div className="column_title">{data}</div>;
    }

    //나머지는 정해진 타입에 의해서 rendering 값을 정한다.
    switch (data.type) {
      case "date":
        return <>{data.start}</>;
      case "title":
        return <> {data.text}</>;
      case "status":
        return <StatusCell status={data.status} />;
      case "select":
        return <>{data.name}</>;
      case "relation":
        return <>{fetchRelation(data.relation[0].id)}</>;
      case "rollup":
        return <>{data.number}</>;
      case "checkbox":
        // return <CheckboxCell >{data.checkbox + ""}</CheckboxCell>;
        return <CheckboxCell isChecked={data.checkbox} />;
      default:
        return null;
    }
  };

  return <SCell>{data ? bindingData() : null}</SCell>;
}
