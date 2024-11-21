import React from "react";
import { Form, Input, Upload, Select } from "antd";
import { CiShare1 } from "react-icons/ci";

const ProfileInfoForm = () => {
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      <div className="flex justify-between items-center mb-[2rem]">
        <aside className="flex gap-4">
          <img
            src="https://via.placeholder.com/32"
            alt="User Profile"
            className="w-20 h-20 rounded-full"
          />
          <div className="flex flex-col justify-center gap-4">
            <span>
              {" "}
              KYC <button className="border rounded-md px-[0.5rem]">unverified</button>
            </span>
            <span className="flex gap-2 items-left">Verify Now <CiShare1 /></span>
          </div>
        </aside>
  
        <button className="border rounded-md px-[0.5rem]">Edit Profile</button>
 
      </div>
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
    </>
  );
};

export default ProfileInfoForm;
