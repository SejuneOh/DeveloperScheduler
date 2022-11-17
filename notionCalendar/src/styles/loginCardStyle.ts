import styled from "styled-components";
import "../styles/common.scss";

export const LoginCardDiv = styled.div`
  background-color: var(--card-background-color);
  border: 1px solid var(--color-border-muted);
  padding: 16px;
  border-radius: 6px;
  margin-top: 18px;
  margin-bottom: 18px;

  > span {
    display: block;
    margin-bottom: 8px;
    color: var(--default-fontColor);
  }

  > input {
    color: inherit;
    width: 100%;
    height: 38px;
    background-color: var(--default-backgroundColor);
    border: 1px solid var(--color-border-muted);
    padding: 5px 12px;
    font-size: 14px;
    vertical-align: middle;
    border-radius: 6px;
    margin-top: 4px;
    margin-bottom: 16px;
  }

  > button {
    height: 38px;
    width: 100%;
    background-color: var(--button-green);
    color: #fff;
    border: none;
    font-weight: 500;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;
