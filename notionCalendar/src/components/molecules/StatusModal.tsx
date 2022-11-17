import React from "react";
import styled from "styled-components";
import StatusBadge from "../atoms/StatusBadge";

export interface IOption_Status {
  active: {
    text: string;
    color: string;
  };
  notStarted: {
    text: string;
    color: string;
  };
  done: {
    text: string;
    color: string;
  };
}

const option: IOption_Status = {
  active: {
    text: "Active",
    color: "blue",
  },
  notStarted: {
    text: "Not started",
    color: "gray",
  },
  done: {
    text: "Done",
    color: "green",
  },
};

const SStatusModal = styled.div`
  .status_wallpaper {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  .wrapper {
    position: relative;
    z-index: 3;
    padding: 1rem;
    .stat_modal_container {
      & > label {
        font-size: 14px;
      }
      margin-bottom: 1rem;
    }
  }
`;

export default function StatusModal() {
  return (
    <SStatusModal>
      <div className="status_wallpaper"></div>
      <div className="wrapper">
        <div className="stat_modal_container">
          <label htmlFor="">진행 중</label>
          <StatusBadge color={option.active.color} text={option.active.text} />
        </div>
        <div className="stat_modal_container">
          <label htmlFor="">할 일</label>
          <StatusBadge
            color={option.notStarted.color}
            text={option.notStarted.text}
          />
        </div>
        <div className="stat_modal_container">
          <label htmlFor="">진행중</label>
          <StatusBadge color={option.done.color} text={option.done.text} />
        </div>
      </div>
    </SStatusModal>
  );
}
