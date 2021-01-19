import { request } from "@/plugins/request";

// 获取标签列表
export const getProfile = (username) => {
  return request({
    method: "get",
    url: `/api/profiles/${username}`,
  });
};

// 关注用户
export const followUser = (username) => {
  return request({
    method: "post",
    url: `/api/profiles/${username}/follow`,
  });
};

// 取消关注用户
export const unfollowUser = (username) => {
  return request({
    method: "delete",
    url: `/api/profiles/${username}/follow`,
  });
};
