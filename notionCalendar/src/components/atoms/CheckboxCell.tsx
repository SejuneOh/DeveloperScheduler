import React from "react";

interface IProps {
  isChecked: boolean;
}

export default function CheckboxCell({ isChecked }: IProps) {
  return (
    <input
      style={{
        width: "1rem",
        height: "1rem",
      }}
      type="checkbox"
      checked={isChecked}
      readOnly={true}
    />
  );
}
