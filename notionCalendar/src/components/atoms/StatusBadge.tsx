import React, { useEffect } from "react";
import styled from "styled-components";

interface IProps {
  color: string;
  text: string;
}

const SStatusBadge = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3px 1rem;
  min-width: 200px;
  border-radius: 12px;
  /* border: 1px solid white; */

  &:hover {
    opacity: 0.8;
  }

  &.blue {
    background-color: var(--deep-blue);
  }

  &.gray {
    background-color: gray;
  }

  &.green {
    background-color: green;
  }

  .point_box {
    width: 10px;
    height: 10px;
    border: 1px solid black;
    margin-right: 1rem;

    &.blue {
      background-color: var(--light-blue);
    }

    &.gray {
      background-color: darkgray;
    }

    &.green {
      background-color: yellowgreen;
    }
  }
`;

export default function StatusBadge({ color, text }: IProps) {
  return (
    <SStatusBadge className={color}>
      <div className={`point_box ${color}`}></div>
      <div className="badge_text">{text}</div>
    </SStatusBadge>
  );
}
