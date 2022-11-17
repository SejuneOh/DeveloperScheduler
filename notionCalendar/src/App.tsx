import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AppDiv } from "./AppStyle";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { Cookies } from "react-cookie";
import TestPage from "./pages/TestPage";

interface Users {
  userId: string;
  password: string;
}

function App() {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const token = cookie.get("token");

    if (token) setIsAuth(true);
  }, []);

  return (
    <AppDiv>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={isAuth ? <MainPage /> : <LoginPage />} />
        <Route path="/test" element={<TestPage />}></Route>
      </Routes>
    </AppDiv>
  );
}

export default App;
