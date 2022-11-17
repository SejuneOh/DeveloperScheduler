import { useState } from "react";
import styled from "styled-components";
import LoginCard from "../molecules/LoginCard";
import "../../styles/common.scss";
import LoginTitle from "../atoms/LoginTitle";
import LoginIncorrect from "../molecules/LoginIncorrect";

const LoginMainDiv = styled.main`
  > * {
    box-sizing: border-box;
  }
  .loginForm {
    width: 400px;
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;
  }

  .regiserForm {
    border: 1px solid var(--color-border-muted);
    padding: 16px 16px;
    text-align: center;
    border-radius: 6px;

    > a {
      color: var(--link-color);
    }
  }
`;

export default function LoginMain() {
  const [incorrectFlag, setIncorrectFlag] = useState<boolean>(true);

  return (
    <LoginMainDiv>
      <div className="loginForm">
        <LoginTitle />
        <LoginIncorrect
          incorrectFlag={incorrectFlag}
          setIncorrectFlag={setIncorrectFlag}
        />
        <LoginCard setIncorrcetFlag={setIncorrectFlag} />
        <div className="regiserForm">
          <label htmlFor="">New to Planner? </label>
          <a href="*">Create an account</a>
        </div>
      </div>
    </LoginMainDiv>
  );
}
