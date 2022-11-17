import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../api/serverAPI";
import { LoginCardDiv } from "../../styles/loginCardStyle";

export default function LoginCard({
  setIncorrcetFlag,
}: {
  setIncorrcetFlag: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const loginBtnClick = async () => {
    const result: boolean = await loginAPI(id, password);
    setIncorrcetFlag(result);

    // 로그인 성공 시 main 화면으로 이동
    if (result) {
      navigate("/");
    }
  };
  return (
    <LoginCardDiv>
      <span>Email</span>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <span>Password</span>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={loginBtnClick}>Sign in</button>
    </LoginCardDiv>
  );
}
