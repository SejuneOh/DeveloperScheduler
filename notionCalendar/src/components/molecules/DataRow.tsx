import React, { useEffect } from "react";
import styled from "styled-components";
import { IActions, IGoals, IProjects } from "../../interfaces/ICommon";

interface IProps {
  detailData: IGoals | IProjects | IActions | null;
}

const SRow = styled.div``;

export default function DataRow({ detailData }: IProps) {
  useEffect(() => {
    console.log(detailData);
  }, []);
  return <SRow>DataRow</SRow>;
}
