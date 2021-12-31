import { Form, Input, Button, Checkbox } from "antd";
import "assets/scss/login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, loginSave, selectUser } from "redux/User";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AutoLogin from "api/userApi";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(selectUser);

  const { autoLogin } = AutoLogin();
  function encodedUser(token) {
    const encodedBody = token.split(".")[1];

    const { isAdmin, id } = encodedBody
      ? JSON.parse(window.atob(encodedBody))
      : {};
    return { isAdmin: isAdmin, id: id };
  }
  useEffect(() => {
    let tokenUser = localStorage.getItem("token");
    const token = tokenUser && encodedUser(tokenUser);
    tokenUser && autoLogin(token.id);
  }, []);
  const onFinish = (values) => {
    if (values.remember) {
      dispatch(
        loginSave({ username: values.username, password: values.password })
      );
    } else {
      dispatch(login({ username: values.username, password: values.password }));
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {Object.values(currentUser).length === 0 ? (
        <div className="login">
          <h3>Login</h3>
          <Form
            name="basic"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 20,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 4,
                span: 20,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 20,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button type="secondary" onClick={() => navigate("/register")}>
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        navigate("/train-reactjs")
      )}
    </>
  );
}
