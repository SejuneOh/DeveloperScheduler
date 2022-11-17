import styled from "styled-components";
import LoginFooter from "../organisms/LoginFooter";
import LoginHeader from "../organisms/LoginHeader";
import LoginMain from "../organisms/LoginMain";

const LoginTempleteDiv = styled.div``;

export default function LoginTemplete() {
  return (
    <>
      <LoginHeader />
      <LoginMain />
      <LoginFooter />
    </>
  );
}
