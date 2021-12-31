import * as CryptoJS from "crypto-js";

import { useDispatch } from "react-redux";
import { fetchGetUser, loginSave } from "redux/User";
export default function AutoLogin() {
  const dispatch = useDispatch();

  const autoLogin = async (idUser) => {
    const userData = await dispatch(fetchGetUser());

    const { username, password } = userData.payload.find(
      (item) => idUser === item._id
    );
    const bytes = CryptoJS.AES.decrypt(password, "treeworld");
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    if (idUser) {
      return await dispatch(
        loginSave({ username: username, password: originalPassword })
      );
    } else {
      return;
    }
  };
  return { autoLogin };
}
