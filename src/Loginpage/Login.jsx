import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [Signup, setSignup] = useState(true);
  return (
    <div className="login bg-[#222] h-[100vh]">
      <header className="container mx-auto  border-b-[1px] text-white 	 border-green-400 h-[100px]  text-2xl flex  items-center">
        <h1 className="text-4xl font-medium">News Portal</h1>
      </header>

      {Signup ? (
        <div
          className="container flex flex-col   text-white mx-auto
    "
        >
          <div className="flex flex-row gap-2 mt-10 text-2xl">
            <h1 onClick={() => setSignup(true)} className="text-green-400">
              Sign up{" "}
            </h1>
            <span>/</span>
            <h1 onClick={() => setSignup(false)}>Sign in</h1>
          </div>

          <div className="mt-12 flex-col items-center flex gap-10">
            <div className="flex flex-col gap-3 ">
              <label for="username ">Enter your name </label>
              <input
                type="text"
                className="text-gray-400 bg-[#222] w-[300px]  focus:outline-none border-b-[0.2px] border-green-400"
              />
            </div>
            <div className="flex flex-col  gap-3">
              <label for="username">Enter Email </label>
              <input
                type="text"
                className="text-gray-400 bg-[#222] w-[300px]  focus:outline-none border-b-[0.2px] border-green-400"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label for="username">Enter Password </label>
              <input
                type="text"
                className="bg-[#222] text-gray-400 w-[300px]  focus:outline-none border-b-[0.2px] border-green-400"
              />
            </div>

            <button
              onClick={() => history.push("/home")}
              className="w-[300px] bg-green-400 h-[40px]"
            >
              Sign up
            </button>
          </div>
        </div>
      ) : (
        <div
          className="container flex flex-col   text-white mx-auto
    "
        >
          <div className="flex flex-row gap-2 mt-10 text-2xl">
            <h1 onClick={() => setSignup(true)}>Sign up </h1>
            <span>/</span>
            <h1 className="text-green-400">Sign in</h1>
          </div>

          <form className="mt-12 flex-col items-center flex gap-10">
            <div className="flex flex-col  gap-3">
              <label for="username">Enter Email </label>
              <input
                type="text"
                className="text-gray-400 bg-[#222] w-[300px]  focus:outline-none border-b-[0.2px] border-green-400"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label for="username">Enter Password </label>
              <input
                type="text"
                className="bg-[#222] text-gray-400 w-[300px]  focus:outline-none border-b-[0.2px] border-green-400"
              />
            </div>
            <button
              onClick={() => history.push("/home")}
              className="w-[300px] bg-green-400 h-[40px]"
            >
              Sign in
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
