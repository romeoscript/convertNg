import React from "react";
import { Form, Input, Upload, Select } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const ProfileForm = () => {
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      <div className="flex gap-4">
        <Form.Item
          name="fname"
          label="First Name"
          className="w-full"
          rules={[
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
        <Form.Item label="Select" className="w-full p-[0.5rem]">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
      </div>
      <Form.Item label="Profile Image" className="w-[300px]">
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Drag and drop image</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
    </>
  );
};

export default ProfileForm;
