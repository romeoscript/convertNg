import React from "react";
import { Button, Form, Input } from "antd";

const Settings = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    // Add logic for updating the password
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-left mx-[2rem]">
        Change Password
      </h2>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
        className="max-md:w-[90%] max-md:m-auto bg-white p-[3rem] rounded-lg m-[2rem]"
      >
        <Form.Item
          name="oldPassword"
          label="Old Password"
          rules={[
            {
              required: true,
              message: "Please input your old password!",
            },
          ]}
        >
          <Input.Password className="w-full p-[0.5rem]" />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="New Password"
          rules={[
            {
              required: true,
              message: "Please input your new password!",
            },
            {
              min: 6,
              message: "Password must be at least 6 characters long!",
            },
          ]}
        >
          <Input.Password className="w-full p-[0.5rem]" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm New Password"
          dependencies={["newPassword"]}
          rules={[
            {
              required: true,
              message: "Please confirm your new password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password className="w-full p-[0.5rem]" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="w-full bg-white  border-black text-black d" htmlType="submit">
            Update Password
          </Button>
        </Form.Item>
      </Form>

      <div className="max-md:w-[90%] max-md:m-auto bg-white p-[3rem] rounded-lg m-[2rem]">
        <Form.Item>
          <Button type="primary" className="w-full bg-white border-black text-black" htmlType="submit">
            Delete Account
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default Settings;
