import React from "react";
import { Button, Form, Input, Flex, Checkbox } from "antd";
import { LockOutlined } from "@ant-design/icons";

const SignUpPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      //   {...formItemLayout}
      form={form}
      name="register"
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
        <h2 className="text-2xl font-600">Sign Up</h2>
        <p className="md:w-3/4 max-md:text-sm">
          {" "}
          Create a new one to start managing your crypto assets and bill
          payments effortlessly.
        </p>
      </div>
      <div className="md:flex gap-4">
        <Form.Item
          name="fname"
          label="First Name"
          className="w-full"
          rules={[
            {
              type: "text",
            },
            {
              required: true,
              message: "Please input your First Name",
            },
          ]}
        >
          <Input className="w-full " />
        </Form.Item>
        <Form.Item
          name="lname"
          label="Last Name"
          className="w-full"
          rules={[
            {
              type: "text",
            },
            {
              required: true,
              message: "Please input your Last Name!",
            },
          ]}
        >
          <Input className="w-full" />
        </Form.Item>
      </div>
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

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>By signing up, you agree to our Terms and Service</Checkbox>
          </Form.Item>
          {/* <a href="">Forgot password</a> */}
        </Flex>
      </Form.Item>
        <Button type="primary" className="bg-[#1E1E1E] w-full" htmlType="submit">
          Register
        </Button>
       <p className="text-center my-[0.5rem]">Already have an account? <strong>Sign In here</strong></p> 
    </Form>
  );
};
export default SignUpPage;
