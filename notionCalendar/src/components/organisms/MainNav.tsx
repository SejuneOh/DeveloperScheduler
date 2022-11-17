import "../../styles/common.scss";
import { MainNavStyle } from "../../styles/mainNavStyle";

// icon
import settingIcon from "../../assets/setting.svg";
import logoutIcon from "../../assets/logout.svg";
import mainIcon from "../../assets/main.svg";
import goalsIcon from "../../assets/goals.svg";
import projectsIcon from "../../assets/projects.svg";
import actionsIcon from "../../assets/actions.svg";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import { changeMenu } from "../../store/menuActions";
import { logout } from "../../api/serverAPI";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const menuIcon: Array<string> = [
  mainIcon,
  goalsIcon,
  projectsIcon,
  actionsIcon,
];

export default function MainNav() {
  const menuList = useAppSelector((state) => state.menu.menuList);
  const dispatch = useAppDispatch();

  const cookie = new Cookies();
  const navigate = useNavigate();

  const logoutClickHandle = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const token = cookie.get("token");

    if (!token) return;

    const ret = await logout(token);

    if (ret) {
      alert("로그아웃 되었습니다.");
      navigate("/login");
    }
  };

  const menuClickHandle = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    idx: number
  ) => {
    dispatch(changeMenu(idx));
  };
  return (
    <MainNavStyle>
      <header className="main_nav_header">
        <h1>Developer Calendar </h1>
      </header>
      <section className="main_nav_items">
        <ul>
          {menuList.map((_items, idx: number) => {
            return (
              <li
                key={idx}
                id={`_${_items}`}
                onClick={(e) => {
                  menuClickHandle(e, idx);
                }}
              >
                <img src={menuIcon[idx]} alt="menuIcon" />
                {_items}
              </li>
            );
          })}
        </ul>
      </section>
      <footer className="main_nav_footer">
        <button className="main_nav_footer_logout" onClick={logoutClickHandle}>
          <img src={logoutIcon} alt="" />
          Logout
        </button>
        <button className="main_nav_footer_setting">
          <img src={settingIcon} alt="setting" />
          Setting
        </button>
      </footer>
    </MainNavStyle>
  );
}
