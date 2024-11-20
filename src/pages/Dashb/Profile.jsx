import React from "react";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;

const Profile = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <h2>Complete Profile</h2>

      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        style={{
          maxWidth: 800,
        }}
        layout="vertical"
        autoComplete="off"
        scrollToFirstError
        className="max-md:w-[90%] max-md:m-auto bg-white p-[3rem] rounded-lg m-[2rem]"
      >
        <div className="flex gap-4">
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
            <Input className="w-full p-[0.5rem]" />
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
            <Input className="p-[0.5rem]" />
          </Form.Item>
        </div>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input className="p-[0.5rem]" />
        </Form.Item>

        <Form.Item
          name="Message"
          label="Message"
          rules={[
            {
              required: true,
              message: "send us a message",
            },
          ]}
        >
          <Input.TextArea
            showCount
            maxLength={200}
            style={{
              height: 120,
              resize: "none",
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" className="w-full bg-black" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Profile;
