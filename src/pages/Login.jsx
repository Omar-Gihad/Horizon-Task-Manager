import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { assets } from "../assets/assets";
import { IoLogoApple } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitHandler = async (data) => {
    navigate("/dashboard");
    console.log("submit");
  };

  useEffect(() => {
    // user && navigate("/dashboard");
  }, [user]);

  return (
    <div className="px-40 py-6 flex gap-6 h-screen">
      <div className="flex flex-col  basis-1/2 px-12 rounded-2xl justify-between  ">
        <img className="w-52 pt-12" src={assets.LogoV} alt="" />
        <div className="">
          <h1 className="font-bold text-3xl  pb-1">Login to Dashboard</h1>
          <p className="font-medium pb-6">Fill the bellow form to login</p>
          <div className="flex justify-between">
            <button className="flex gap-2 py-2 px-6 size-fit  border-2 rounded-md justify-center items-center hover:text-white hover:bg-[#6b43dd] transition-all duration-300">
              <FaGoogle size={22} />
              <p>Sign in with Google</p>
            </button>
            <button className="flex gap-2 py-2 px-6 size-fit  border-2 rounded-md justify-center items-center hover:text-white hover:bg-[#6b43dd] transition-all duration-300">
              <IoLogoApple size={24} />
              <p>Sign in with Apple</p>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2 ">
          <hr className="flex-grow border-gray-300" />
          <p>OR</p>
          <hr className="flex-grow border-gray-300 " />
        </div>
        <form
          className=" flex flex-col justify-start items-start gap-6"
          action=""
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="w-full">
            <Textbox
              placeholder="email@example.com"
              type="email"
              name="email"
              label="Email Address"
              className="w-full rounded-lg"
              register={register("email", {
                required: "Email Address is required!",
              })}
              error={errors.email ? errors.email.message : ""}
            />
          </div>
          <div className="w-full">
            <Textbox
              placeholder="your password"
              type="password"
              name="password"
              label="Password"
              className="w-full rounded-lg"
              register={register("password", {
                required: "Password is required!",
              })}
              error={errors.password ? errors.password.message : ""}
            />
          </div>
          <button className="font-bold text-[#6b43dd] hover:text-[#35148f] hover:underline">
            Forgot Password?
          </button>
          <button
            type="submit"
            label="Submit"
            className="mb-12 w-full bg-[#6b43dd] text-white font-semibold text-lg p-2 rounded-lg hover:bg-[#35148f] transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>

      <div className="relative flex flex-col overflow-hidden basis-1/2 bg-violet-100 rounded-2xl p-12">
        <div className="flex flex-col gap-6 z-10">
          <div className="text-slate-600 border-2 border-slate-300 rounded-full inline-block p-3 bg-slate-100 shadow-md size-fit">
            <p className="text-sm font-medium">
              Manage all your tasks in one place
            </p>
          </div>

          <h2 className="text-black text-3xl font-bold leading-relaxed ">
            Manage your tasks and
            <br /> Operations
            <span className="text-[#6b43dd]"> more Professionally.</span>
          </h2>
        </div>

        <div className=" pl-16 absolute right-[-280px] bottom-[0px] z-0">
          <img
            className=" blur-[2px] rounded-t-xl object-cover w-[3641px] h-auto shadow-md  hover:blur-none  transition-all duration-1000"
            src={assets.LogDashImg}
            alt="Task Management Dashboard"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
