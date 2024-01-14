import InputField from "@/components/FormFields/InputField";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    vision: "",
    mission: "",
    companyName: "",
    industry: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios
      .post(
        "https://backend-core.azuremicroservices.io/api/v1/auth/employer/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data.message);
        toast.success(res.data.message);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.errors[0]);
          toast.error(err.response.data.errors[0]);
        } else {
          console.log(err);
        }
      });
  };
  return (
    <div className="flex flex-col justify-center items-center w-full my-16">
      <div className="mb-10">
        <p className="font-bold text-3xl">SignUp Page</p>
      </div>
      <ToastContainer />
      <form className="" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-8 w-full">
          <div>
            <InputField
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
              label="First Name"
              onChange={handleChange}
            />

            <InputField
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              label="Last Name"
              onChange={handleChange}
            />

            <InputField
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder="Phone number"
              label="Phone Number"
              onChange={handleChange}
            />

            <InputField
              type="password"
              name="password"
              value={formData.password}
              placeholder="password"
              label="Password"
              onChange={handleChange}
            />

            <InputField
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="password"
              label="Confirm Password"
              onChange={handleChange}
            />

            <InputField
              type="text"
              name="industry"
              value={formData.industry}
              placeholder="industry"
              label="Industry"
              onChange={handleChange}
            />
          </div>

          <div>
            <InputField
              type="text"
              name="username"
              value={formData.username}
              placeholder="User name"
              label="Username"
              onChange={handleChange}
            />

            <InputField
              type="email"
              name="email"
              value={formData.email}
              placeholder="email"
              label="Email"
              onChange={handleChange}
            />

            <InputField
              type="text"
              name="companyName"
              value={formData.companyName}
              placeholder="company name"
              label="Company Name"
              onChange={handleChange}
            />

            <InputField
              type="text"
              name="vision"
              value={formData.vision}
              placeholder=""
              label="Vision"
              onChange={handleChange}
            />

            <InputField
              type="text"
              name="mission"
              value={formData.mission}
              placeholder=""
              label="Mission"
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          className="bg-blue-700 p-2 rounded-md text-white px-6 flex items-center justify-center w-full mt-6"
          type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
