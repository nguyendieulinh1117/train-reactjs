import instance from "./axiosClient";
export const requestsUser = {
  async register(body) {
    const config = {
      method: "POST",
      url: "auth/register",
      data: body,
    };
    const { data } = await instance(config);
    return data;
  },
  async login(body) {
    const config = {
      method: "POST",
      url: "auth/login",
      data: body,
    };
    try {
      const { data } = await instance(config);
      return data;
    } catch (error) {
      return error;
    }
  },
};
