import React from "react";
import styled from "styled-components";
import StatusBadge from "../components/atoms/StatusBadge";
import StatusModal from "../components/molecules/StatusModal";

const TestDiv = styled.div`
  .test_container {
    visibility: hidden;
    visibility: visible;
  }
`;

export default function TestPage() {
  return (
    <TestDiv>
      {/* <div className="test_container">
        <StatusBadge color="blue" text="Active" />
        <StatusBadge color="gray" text="No-Active" />
        <StatusBadge color="green" text="Done" />
      </div> */}
      <StatusModal />
      <input type="checkbox" checked={true} />
    </TestDiv>
  );
}
