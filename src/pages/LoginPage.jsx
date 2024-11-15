import React from "react";
import { Button, Form, Input, Flex, Checkbox } from "antd";
import { LockOutlined } from "@ant-design/icons";

const LoginPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      //   {...formItemLayout}
      form={form}
      name="login"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
        width: "100%",
        margin: "auto",
        padding: "1rem",
      }}
      scrollToFirstError
      layout="vertical"
      autoComplete="off"
    >
      <div className="text-left my-[2rem]">
        {" "}
        <h2 className="text-2xl font-600">Sign In</h2>
        <p className="w-3/4">
          {" "}
          Sign in to access your account
        </p>
      </div>
     
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined />} />
      </Form.Item>
      <p className="text-left my-[0.5rem]">Forgot password?  <strong>click Here</strong></p> 
        <Button type="primary" className="bg-[#1E1E1E] w-full" htmlType="submit">
          Sign in
        </Button>
        <p className="text-center my-[0.5rem]">No account yet? <strong>Sign Up here</strong></p> 
    </Form>
  );
};
export default LoginPage;
