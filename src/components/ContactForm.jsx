import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;

const ContactForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      layout="vertical"
      autoComplete="off"
      scrollToFirstError
      className="max-md:w-[90%] max-md:m-auto"
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
        name="phone"
        label="Phone Number"
        className="p-[0.5rem]"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
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
  );
};
export default ContactForm;
