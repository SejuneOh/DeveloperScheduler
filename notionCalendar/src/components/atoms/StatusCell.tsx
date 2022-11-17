import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StatusModal from "../molecules/StatusModal";
import StatusBadge from "./StatusBadge";

const SStatusCell = styled.div`
  cursor: pointer;
  position: relative;
  /* border: 1px solid white; */

  .status {
    position: relative;
  }

  .status_option {
    position: absolute;
    background-color: var(--color-border-muted);
    top: 2rem;
    left: 0;
    border-radius: 3px;
    z-index: 2;
    visibility: hidden;

    &.open {
      visibility: visible;
    }
  }
`;

interface IProps {
  status: string;
}

export default function StatusCell({ status }: IProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsActive((prev) => !prev);
  };

  const renderCell = (current_state: string): JSX.Element => {
    switch (current_state) {
      case "Active":
        return <StatusBadge text={current_state} color="blue" />;
      case "Not started":
        return <StatusBadge text={current_state} color="gray" />;
      case "Done":
        return <StatusBadge text={current_state} color="green" />;
      default:
        return <StatusBadge text={current_state} color="green" />;
    }
  };

  useEffect(() => {
    // console.log(status);
  }, []);

  return (
    <SStatusCell onClick={handle}>
      <div className="status">{status ? renderCell(status) : null}</div>
      <div className={isActive ? "status_option open" : "status_option"}>
        {status ? <StatusModal /> : null}
      </div>
    </SStatusCell>
  );
}
