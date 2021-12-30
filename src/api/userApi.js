import instance from "./axiosClient";
export const requestsUser = {
  async login(body) {
    const config = {
      method: "POST",
      url: "auth/login",
      data: body,
    };
    const { data } = await instance(config);
    return data;
  },
};
