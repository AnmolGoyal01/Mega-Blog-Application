import React from "react";
import { Link } from "react-router-dom";
import { Button } from ".";
import { logout } from "../store/features/authSlice";
import { useDispatch } from "react-redux";
import authservice from "../appwrite/auth";

export default function AlreadyLoggedin() {
  const dispatch = useDispatch();
  return (
    <div className="max-h-screen py-10 px-2 my-10 flex items-center justify-center w-full bg-gray-800">
      <div className="bg-gray-900 w-full shadow-md rounded-lg px-8 py-6 max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-200">
          You are already logged in
        </h1>
        <div className="mt-5 w-full flex justify-between p-4 text-lg text-gray-300 text-center hover:text-white hover:underline">
          <Link to="..">click here to go to Home</Link>
        </div>
        <div
          onClick={async (e) => {
            dispatch(logout());
            await authservice.logout();
          }}
          className="w-full flex justify-between p-4 text-lg text-gray-300 text-center hover:text-white hover:underline"
        >
          click here to go to Logout
        </div>
      </div>
    </div>
  );
}
