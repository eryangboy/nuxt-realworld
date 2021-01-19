import { request } from "@/plugins/request";

// 用户登录
export const login = (data) => {
  return request({
    method: "post",
    url: "/api/users/login",
    data,
  });
};

// 用户注册
export const register = (data) => {
  return request({
    method: "post",
    url: "/api/users",
    data,
  });
};

// 获取用户信息
export const getUser = () => {
  return request({
    method: "get",
    url: "/api/user",
  });
};

// 更新用户信息
export const updateUser = (data) => {
  return request({
    method: "put",
    url: "/api/user",
    data,
  });
};
