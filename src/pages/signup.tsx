import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import InputField from "@/components/FormFields/InputField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Icons } from "@/components/icons";
import { industries } from "@/utils/miscellanous.util";
import CustomSelect from "@/components/FormFields/CustomSelect";
import { Loader } from "@/components/Loader";

const SignUp = () => {
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
      industry: { value: "", label: "" },
    },
    onSubmit: async (values) => {
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
          console.log(res.data);
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
      password: Yup.string().min(8).required("Password is required"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords do not match"
      ),
    }),
  });

  return (
    <div className="flex flex-col justify-center items-center w-full my-16 px-10">
      <div className="flex flex-col items-center mb-11 space-y-14">
        <Icons name="logo" />
        <p className="font-bold md:text-[36px] text-black font-inter">
          Register as an organisation
        </p>
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

            <CustomSelect
              label="Industry"
              name="Industry"
              options={industries}
              handleOptionChange={(option) => {
                formik.setFieldValue("industry", option?.value);
              }}
            />

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
            onBlur={formik.handleBlur}
            error={formik.touched.password ? formik.errors.password : ""}
          />

          <InputField
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            placeholder="password"
            label="Confirm Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword
                ? formik.errors.confirmPassword
                : ""
            }
          />
        </div>

        <p>
          Have an account?{" "}
          <span className="font-bold font-inter">
            <Link href="/signin">Login</Link>
          </span>
        </p>

        <div className="flex items-center md:gap-7 ga mt-6 text-[#8B8B8B] font-inter md:text-sm text-xs">
          <input type="checkbox" className="bg-[#EBF0F0] rounded h-6 w-6" />
          <p>
            By registering I confirm I have read and agree to the Terms of Use.{" "}
            <br />
            We manage personal data as set out in our Privacy Notice.
          </p>
        </div>

        <button
          className="bg-[#0066FF] p-2 rounded-md text-white px-28 h-[52px] w-full flex items-center justify-center mt-6"
          type="submit">
          {formik.isSubmitting ? <Loader /> : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
