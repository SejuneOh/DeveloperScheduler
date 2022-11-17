import React from "react";
import styled from "styled-components";
import LoginIcon from "../atoms/LoginIcon";

const LoginHeaderDiv = styled.header`
  /* border: 1px solid white; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 30px;
`;

export default function LoginHeader() {
  return (
    <LoginHeaderDiv>
      <LoginIcon />
    </LoginHeaderDiv>
  );
}
