import React from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  function handleChange(event) {
    setEmail(event.target.value);
  }

  return (
    <section className="">
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%]  sm:mb-8 lg:mb-0">
          <img
            className="w-full rounded-2xl"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div className="w-full md:w-[67%] lg:max-w-[40%] lg:ml-20 ">
          <form>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              className="w-full px-4 text-xl py-2 text-gray-700 bg-white border-gray-300 rounded transition ease-out"
              placeholder="Email Address"
            />

            <div className="mt-5 flex justify-between">
              <p>
                Don't have a account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-2 font-semibold"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out font-semibold"
                >
                  sign in instead
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 font-medium uppercase rounded shadow-md mt-5 hover:bg-blue-700 transition duration-150 ease-out"
            >
              send reset email
            </button>
            <div className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
