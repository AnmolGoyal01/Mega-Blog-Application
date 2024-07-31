import React, { useState } from "react";
import { InputBar } from ".";
import { Link, useNavigate } from "react-router-dom";
import { login as storeLogin } from "../store/features/authSlice";
import { useDispatch } from "react-redux";
import authservice from "../appwrite/auth";
import { useForm } from "react-hook-form";

export default function LoginComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();

  const loginHandeller = async (data) => {
    setError(null);
    try {
      const session = await authservice.login(data);
      if (session) {
        const user = await authservice.getCurrentUser();
        if (user) dispatch(storeLogin(user));
        navigate("/");
      } else setError("failed to login");
    } catch (errorr) {
      setError(errorr);
    }
  };

  return (
    <div className="max-h-screen py-10 px-2 my-10 flex items-center justify-center w-full bg-gray-800">
      <div className="bg-gray-900 w-full shadow-md rounded-lg px-8 py-6 max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-200">
          Welcome Back!
        </h1>
        {error && (
          <div className="bg-red-200 px-6 py-1 mx-2 my-4 rounded-md text-sm flex items-center mx-auto max-w-lg">
            <svg
              viewBox="0 0 24 24"
              className="text-red-600 text-xs w-5 h-5 sm:w-5 sm:h-5 mr-3"
            >
              <path
                fill="currentColor"
                d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
              ></path>
            </svg>
            <span className="text-red-800"> {error} </span>
          </div>
        )}
        <form onSubmit={handleSubmit(loginHandeller)}>
          <InputBar
            type="email"
            label="Email"
            placeholder="enter your email"
            required={true}
            {...register("email", {
              required: true,
            })}
          />
          <InputBar
            type="password"
            label="Password"
            placeholder="enter your password"
            required={true}
            {...register("password", {
              required: true,
            })}
          />
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                defaultChecked=""
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-300"
              >
                Remember me
              </label>
            </div>
            <Link
              to="../signup"
              className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Account
            </Link>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
