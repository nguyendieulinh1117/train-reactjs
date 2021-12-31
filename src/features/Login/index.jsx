import { Form, Input, Button, Checkbox } from "antd";
import "assets/scss/login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSave, selectUser } from "redux/User";
import { useSelector } from "react-redux";
import { requestsUser } from "api/userApi";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(selectUser);
  const { loading } = useSelector(selectUser);

  const onFinish = (values) => {
    // console.log("Success:", values);
    requestsUser
      .login({ username: values.username, password: values.password })
      .then((data) => console.log(data))
      .catch((error) => console.log(error.response.data));
    // dispatch(
    //   loginSave({ username: values.username, password: values.password })
    // );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
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
  );
}
