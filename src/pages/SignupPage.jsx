import React from "react";
import { SignupComponent, AlreadyLoggedin } from "../components";
import { useSelector } from "react-redux";

export default function SignupPage() {
  const authStatus = useSelector((state) => state.auth.status);
  if (authStatus) {
    return <AlreadyLoggedin />;
  } else return <SignupComponent />;
}
