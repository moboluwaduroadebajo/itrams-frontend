import Button from "@/components/Button";
import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Select from "react-select";
import InputField from "@/components/FormFields/InputField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    vision: "",
    mission: "",
    companyName: "",
    industry: "",
  });

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

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      vision: "",
      mission: "",
      companyName: "",
      industry: "",
    },
    onSubmit: async (values) => {
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        confirmPassword,
        vision,
        mission,
        companyName,
        industry,
      } = values;
      console.log(values);

      await axios
        .post(
          "https://backend-core.azuremicroservices.io/api/v1/auth/employer/register",
          values,
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
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string().min(8).required("Email is required"),
    }),
  });

  const options = [
    { value: "Telecommunication", label: "Telecommunication" },
    { value: "Housing", label: "Housing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Finance", label: "Finance" },
    { value: "Banking", label: "Banking" },
    { value: "Education", label: "Education" },
    { value: "Tourism", label: "Tourism" },
    { value: "Hospitality", label: "Hospitality" },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full my-16">
      <div className="flex flex-col items-center mb-11 space-y-14">
        <p className="font-normal font-domine ext-xl">e-ITraMs</p>
        <p className="font-bold md:text-[36px] text-black font-inter">
          Register as an organisation
        </p>
      </div>

      <div className="flex justify-center items-center gap-5 mb-10">
        <div className="w-[680px] h-4 bg-[#F5F5F5] rounded-full"></div>
        <p>1/3</p>
      </div>
      <ToastContainer />

      <form onSubmit={formik.handleSubmit}>
        <div className="w-full">
          <div className="flex justify-between gap-12">
            <InputField
              type="text"
              name="firstName"
              value={formik.values.firstName}
              placeholder="First Name"
              label="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName ? formik.errors.firstName : ""}
            />

            <InputField
              type="text"
              name="lastName"
              value={formik.values.lastName}
              placeholder="Last Name"
              label="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName ? formik.errors.lastName : ""}
            />
          </div>

          <div className="flex justify-between gap-12">
            <InputField
              type="text"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              placeholder="Phone number"
              label="Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.phoneNumber ? formik.errors.phoneNumber : ""
              }
            />

            <InputField
              type="email"
              name="email"
              value={formik.values.email}
              placeholder="email"
              label="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email ? formik.errors.email : ""}
            />
          </div>

          <div>
            <InputField
              type="text"
              name="companyName"
              value={formik.values.companyName}
              placeholder="Company name"
              label="Company Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName ? formik.errors.lastName : ""}
            />

            <InputField
              type="text"
              name="industry"
              value={formik.values.industry}
              placeholder="Industry"
              label="Industry"
              onChange={formik.handleChange}
            />

            {/* <div className="">
              <label htmlFor="">Industry</label>
              <Select
                className="indent-8"
                placeholder="Industry"
                options={options}
                isSearchable
              />
            </div> */}

            <InputField
              type="text"
              name="vision"
              placeholder="Vision"
              value={formik.values.vision}
              label="Vision"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.vision ? formik.errors.vision : ""}
            />

            <InputField
              type="text"
              name="mission"
              value={formik.values.mission}
              placeholder="Mission"
              label="Mission"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <InputField
            type="password"
            name="password"
            value={formik.values.password}
            placeholder="Enter password"
            label="Enter Password"
            onChange={formik.handleChange}
          />

          <InputField
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            placeholder="password"
            label="Confirm Password"
            onChange={formik.handleChange}
          />
        </div>

        <p>
          Have an account?{" "}
          <span className="font-bold font-inter">
            <Link href="/">Login</Link>
          </span>
        </p>

        <div className="flex items-center gap-7 mt-6 text-[#8B8B8B] font-inter text-sm">
          <input
            type="checkbox"
            className="bg-[#EBF0F0] rounded h-6 w-6 accent-black"
          />
          <p>
            By registering I confirm I have read and agree to the Terms of Use.{" "}
            <br />
            We manage personal data as set out in our Privacy Notice.
          </p>
        </div>

        <button
          className="bg-black p-2 rounded-md text-white px-28 w-full flex items-center justify-center mt-6"
          type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignUp;
