// import Image from "next/image";
// import { Inter } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Loader } from "@/components/Loader";
import axios from "axios";
import Link from "next/link";
import InputField from "@/components/FormFields/InputField";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   setLoader(true);

  //   let details = { username, password };

  //   await fetch(
  //     "https://backend-core.azuremicroservices.io/api/v1/auth/login",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(details),
  //     }
  //   )
  //     .then((res) => {
  //       if (!res.ok) {
  //         console.log("###1");
  //         console.log(res);
  //         toast.error("Bad credentials");
  //         return;
  //       }
  //       console.log("###2");

  //       return res.json();
  //     })
  //     .then((response) => {
  //       toast.success(response.message);
  //     })

  //     .catch((err) => {
  //       console.log("###3");
  //       console.log(err);
  //     });

  //   setUsername("");
  //   setPassword("");
  //   setLoader(false);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      username,
      password,
    };

    setLoader(true);
    await axios
      .post(
        "https://backend-core.azuremicroservices.io/api/v1/auth/login",
        formData
      )
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        if (res.data.data.user.type === "ADMIN") {
          // navigate("/admin");
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
    // setUsername("");
    // setPassword("");
    setLoader(false);
  };
  return (
    <header className="flex flex-col items-center min-h-screen ">
      <h2 className="mb-24">ITraMs signup page</h2>
      <ToastContainer />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center mb-12">
          <p className="font-sora font-extrabold text-[42px]">Login</p>
          <p className="font-sora font-normal text-[20px] text-[#747A80]">
            Enter your detail to be onboarded
          </p>
        </div>

        <div>
          {/* <label>Username</label>
          <input
            className="appearance-none border-2 rounded outline-none font-normal p-2 w-full"
            type="text"
            name="username"
            placeholder="username"
            value={username}
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          /> */}
          <InputField
            type="text"
            name="username"
            label="Username"
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="my-6">
          <label>Password</label>
          <input
            className="appearance-none border-2 rounded outline-none font-normal p-2 w-full"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="text-gray-600 text-right cursor-pointer">
          {" "}
          Forgot password?
        </div>

        <button
          className="bg-blue-700 p-2 rounded-md text-white px-6 flex items-center justify-center w-full mt-6"
          type="submit">
          {loader ? <Loader /> : "Login"}
        </button>

        <p className="mt-8">
          Don&apos;t have an account yet?{" "}
          <span className="text-blue-500 cursor-pointer">
            <Link href="/signup"> Sign up as an employer</Link>
          </span>
        </p>
      </form>
    </header>
  );
}

