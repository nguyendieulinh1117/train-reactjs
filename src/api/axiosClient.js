import axios from "axios";
const instance = axios.create({
  baseURL: "https://treeworld.herokuapp.com/",
});
export default instance;
