import React from "react";
import { Form, Input, Upload, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const KYCForm = () => {
  return (
    <>
      <Form.Item
        name="kycDocument"
        label="KYC Document Upload"
        rules={[
          {
            required: true,
            message: "Please upload a KYC document!",
          },
        ]}
      >
        <Upload>
          <Button icon={<InboxOutlined />}>Upload Document</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        name="idNumber"
        label="ID Number"
        rules={[
          {
            required: true,
            message: "Please input your ID Number!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default KYCForm;
