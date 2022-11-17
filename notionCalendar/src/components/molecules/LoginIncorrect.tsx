import React from "react";
import styled from "styled-components";
import cancelIcon from "../../assets/close.svg";

const LoginIncorrectDiv = styled.div`
  background-color: var(--incorrect-background-color);
  border: 1px solid var(--color-incorrect-border);
  border-radius: 6px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none;

  &.open {
    display: flex;
  }

  > img:hover {
    opacity: 0.3;
  }
`;

type loginIncorrectPropsType = {
  incorrectFlag: boolean;
  setIncorrectFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginIncorrect({
  incorrectFlag,
  setIncorrectFlag,
}: loginIncorrectPropsType) {
  return (
    <LoginIncorrectDiv className={!incorrectFlag ? "open" : ""}>
      <label htmlFor="">Incorrect ID or Password</label>
      <img
        src={cancelIcon}
        alt="닫기"
        onClick={(e) => setIncorrectFlag(true)}
      />
    </LoginIncorrectDiv>
  );
}
