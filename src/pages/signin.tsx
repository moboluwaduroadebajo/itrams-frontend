import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "@/components/Loader";
import axios from "axios";
import InputField from "@/components/FormFields/InputField";
import { useRouter } from "next/router";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Icons } from "@/components/icons";
import {
  accountSlice,
  selectAccessToken,
  selectAccountState,
  selectIsAuthenticated,
  selectUserInformation,
  selectUserRole,
} from "@/reducers/account.reducer";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { login } from "@/thunks/account-thunk";

const Signin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const userRole = useAppSelector(selectUserRole);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const { error: loginError } = useAppSelector(selectAccountState);
  const user = useAppSelector(selectUserInformation);

  useEffect(() => {
    if (isAuthenticated) {
      if (userRole === "ADMIN") {
        router.push("/admin");
      } else if (userRole === "EMPLOYER") {
        router.push("/employer");
      } else if (userRole === "STUDENT") {
        router.push("/student");
      } else if (userRole === "SUPERVISOR") {
        router.push("/supervisor");
      }
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (loginError) {
      formik.setSubmitting(false);
    }
  }, [loginError]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      const { username, password } = values;
      try {
        dispatch(login({ username: username, password: password }));
      } catch (error) {
        console.log("Error", error);
      }
    },
  });

  return (
    <main>
      <ToastContainer />

      <div className="flex flex-col justify-center items-center w-full mt-10 px-10">
        <div className="flex flex-col items-center mb-11 space-y-14">
          <Icons name="logo" />
          <p className="font-bold md:text-[36px] text-black font-inter">
            Login as an organisation
          </p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="md:w-[474px] w-full">
            <InputField
              type="text"
              name="username"
              label="Username"
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username ? formik.errors.username : ""}
            />
            <InputField
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password ? formik.errors.password : ""}
            />
          </div>

          <div className="space-y-6 text-black">
            <p className="cursor-pointer font-bold font-inter">
              {" "}
              Forgot password?
            </p>
            <p className="cursor-pointer">
              {" "}
              New user?{" "}
              <span className="font-bold">
                <Link href="/signup">Sign up</Link>
              </span>
            </p>
          </div>

          <button
            className="bg-[#0066FF] p-2 rounded-md text-white px-28 w-full flex items-center justify-center mt-6"
            type="submit">
            {formik.isSubmitting ? <Loader /> : "Proceed"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Signin;
