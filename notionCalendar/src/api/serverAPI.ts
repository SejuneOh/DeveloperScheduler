import axios, { AxiosResponse } from "axios";
import { Cookies } from "react-cookie";

type loginProps = {
  userId: string;
  password: string;
};

const cookie = new Cookies();

const api = axios.create({
  baseURL: "http://localhost:4021",
  // timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

export const loginAPI = async (userId: string, password: string) => {
  const res = await api.post("/api/user/login", {
    email: userId,
    password: password,
  });

  if (res.data.success) {
    cookie.set("token", res.data.token);
  }

  return res.data.success;
};

// token으로 변경하자
export const logout = async (_token: string) => {
  const res = await api.post("/api/user/logout", {
    token: _token,
  });

  console.log(res);

  if (res.data.success) {
    cookie.remove("token");
  }

  return res.data.success;
};

export const getNotionAllData = async () => {
  const promiseGoals = api.get("/api/post/goals");
  const promiseProject = api.get("/api/post/projects");
  const promiseActions = api.get("/api/post/actions");

  // 병렬방식으로 한번에 요청
  const res = await Promise.all([promiseGoals, promiseProject, promiseActions]);

  if (res.length > 0) {
    interface ItemType {
      id: string;
      bindingData: Array<any>;
    }
    const bindingResult: Array<ItemType> = [];

    res.forEach((item) => {
      const ret: ItemType = {
        id: item.data.id,
        bindingData: item.data.result,
      };

      bindingResult.push(ret);
    });

    return bindingResult;
  }
};

const getDate = (_date: string): string => {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const date = newDate.getDate();
  return `${year}-${month}-${date}`;
};
