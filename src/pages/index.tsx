import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Loader } from "@/components/Loader";
import axios from "axios";
import Link from "next/link";
import InputField from "@/components/FormFields/InputField";
import { useRouter } from "next/router";
import { Navbar } from "@/components/Home";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const router = useRouter();

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
          router.push("/Admin");
        } else if (res.data.data.user.type === "EMPLOYER") {
          router.push("/Employer");
        } else if (res.data.data.user.type === "STUDENT") {
          router.push("/Student");
        } else if (res.data.data.user.type === "SUPERVISOR") {
          router.push("/Supervisor");
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
    <header className=" ">
      <Navbar />
      <ToastContainer />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center min-h-screen">
        <div className="flex flex-col items-center mb-12">
          <p className="font-sora font-extrabold text-[42px] text-[#178CA4]">
            Login
          </p>
          <p className="font-sora font-normal text-[20px] text-[#747A80]">
            Enter your detail to be onboarded
          </p>
        </div>

        <div>
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

        <div className="mb-6">
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
          className="bg-[#178CA4] p-2 rounded-md text-white px-28 flex items-center justify-center  mt-6"
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

