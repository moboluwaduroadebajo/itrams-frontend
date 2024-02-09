import React from "react";
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

const Signin = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      const { username, password } = values;
      await axios
        .post("https://backend-core.azuremicroservices.io/api/v1/auth/login", {
          username,
          password,
        })
        .then((res) => {
          console.log(res);
          toast.success(res.data.message);
          if (res.data.data.user.type === "ADMIN") {
            router.push("/admin");
          } else if (res.data.data.user.type === "EMPLOYER") {
            router.push("/employer");
          } else if (res.data.data.user.type === "STUDENT") {
            router.push("/student");
          } else if (res.data.data.user.type === "SUPERVISOR") {
            router.push("/supervisor");
          }
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response);
            toast.error(err.response.data.errors[0]);
          } else {
            console.log(err);
          }
        });
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
