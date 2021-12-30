import instance from "./axiosClient";
export const requestsProduct = {
  async getAllProducts() {
    const { data } = await instance.get("products");
    return data;
  },
  async getSingleProduct(id) {
    const { data } = await instance.get(`products/${id}`);
    return data;
  },
};
