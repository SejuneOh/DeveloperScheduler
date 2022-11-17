import React from "react";
import styled from "styled-components";

const LoginFooterDiv = styled.footer`
  margin-top: 40px;

  .wrapper {
    margin: 0 auto;
    padding: 20px;
    > ul {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      > li {
        margin-right: 1rem;
        color: var(--link-color);
      }
    }
  }
`;

export default function LoginFooter() {
  return (
    <LoginFooterDiv>
      <div className="wrapper">
        <ul>
          <li>Blog</li>
          <li>Portfolio</li>
        </ul>
      </div>
    </LoginFooterDiv>
  );
}
