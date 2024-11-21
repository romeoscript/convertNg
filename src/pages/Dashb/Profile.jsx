import React, { useState } from "react";
import { Button, Form } from "antd";
import ProfileForm from "../../components/ProfileForm";
import ProfileInfoForm from "../../components/ProfileInfoForm";
import KYCForm from "../../components/KYCForm";

const Profile = () => {
  const [currentStep, setCurrentStep] = useState("profile"); // Tracks the current step
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    if (currentStep === "profile") {
      setCurrentStep("profileInfo"); 
    } else if (currentStep === "profileInfo") {
      setCurrentStep("kyc"); 
    } else {
      console.log("Final Submission: ", values); 
    }
  };

  const renderForm = () => {
    switch (currentStep) {
      case "profile":
        return <ProfileForm />;
      case "profileInfo":
        return <ProfileInfoForm />;
      case "kyc":
        return <KYCForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-left mx-[2rem]">
        {currentStep === "profile"
          ? "Complete Profile"
          : currentStep === "profileInfo"
          ? "Profile Information"
          : "KYC"}
      </h2>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
        className="max-md:w-[90%] max-md:m-auto bg-white p-[3rem] rounded-lg m-[2rem]"
      >
        {renderForm()}
        <Form.Item>
          <Button
            type="primary"
            className="w-full bg-black"
            htmlType="submit"
          >
            {currentStep === "kyc" ? "Submit Final Details" : "Next"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Profile;
