import React from "react";
import styled from "styled-components";
import "../../styles/common.scss";

const LoginTitleDiv = styled.div`
  text-align: center;
  margin-bottom: 16px;

  > h1 {
    font-size: var(--fontSize-h1);
    font-weight: 400;
  }
`;

export default function LoginTitle() {
  return (
    <LoginTitleDiv>
      <h1>Sign in to Planner</h1>
    </LoginTitleDiv>
  );
}
