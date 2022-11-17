import React from "react";
import loginIcon from "../../assets/logo.svg";

export default function LoginIcon() {
  return (
    <>
      <a href="*">
        <img
          style={{
            width: "48px",
            height: "48px",
          }}
          src={loginIcon}
          alt="loginIcon"
        />
      </a>
    </>
  );
}
