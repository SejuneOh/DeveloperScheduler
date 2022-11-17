import React, { useEffect } from "react";
import LoginTemplete from "../components/templates/LoginTemplete";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const cookie = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    const token = cookie.get("token");
    // token이 있을 경우, login page 접근 할 수 없더록 제한
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <LoginTemplete />
    </>
  );
}
