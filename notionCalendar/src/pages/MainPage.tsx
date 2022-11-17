import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import MainTemplete from "../components/templates/MainTemplete";
import { useAppDispatch } from "../hooks/redux_hooks";
import { funcGetNotionData } from "../store/notionActions";

export default function MainPage() {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = cookie.get("token");

    if (!token) {
      alert("로그인 부탁 드립니다.");
      navigate("/login");
    }

    dispatch(funcGetNotionData());
  }, []);

  return (
    <>
      <MainTemplete />
    </>
  );
}
