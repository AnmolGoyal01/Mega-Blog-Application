import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import authservice from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/features/authSlice";

function App() {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  // getting current user
  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((user) => {
        user ? dispatch(login({ user })) : dispatch(logout());
      })
      .catch((error) => {
        //Todo Show error
      })
      .finally(setLoader(false));
  }, []);

  if (loader) {
    return (
      <div className="w-full h-screen text-white flex items-center justify-center">
        <div className="text-4xl">Loading...</div>
      </div>
    );
  } else
    return (
      <>
        <Header />
        <main className="pt-14">
          <Outlet />
        </main>
        <div className="border border-gray-200/10 w-full bg-gray-200/60 mt-8"></div>
        <Footer />
      </>
    );
}

export default App;
