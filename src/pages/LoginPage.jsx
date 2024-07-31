import React from "react";
import { LoginComponent, AlreadyLoggedin } from "../components";
import { useSelector } from "react-redux";

export default function LoginPage() {
  const authStatus = useSelector((state) => state.auth.status);
  if (authStatus) {
    return <AlreadyLoggedin />;
  } else return <LoginComponent />;
}
