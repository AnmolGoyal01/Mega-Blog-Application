import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/features/authSlice";
import { Logo, Container, Button } from "..";
import authservice from "../../appwrite/auth";

export default function Header() {
  const [menuExtender, setMenuExtender] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Create Post",
      slug: "/create-post",
      active: authStatus,
    },
  ];

  return (
    <header className="fixed z-[99] shadow-lg rounded-lg top-0 w-full flex items-center justify-center">
      <nav className="w-full flex flex-col items-center justify-center">
        <div className="bg-gray-800 w-full max-w-screen-2xl px-4 text-white py-3 px-4 flex items-center justify-between">
          {/* logo  */}
          <div className="">
            <Link to="/" className="font-bold text-xl tracking-tight">
              <Logo />
            </Link>
          </div>

          {/* menu Extender icon (for smaller displays)  */}
          <div className="sm:hidden text-lg hover:bg-gray-700 px-2 rounded-lg">
            {menuExtender && (
              <button onClick={(e) => setMenuExtender((prev) => !prev)}>
                ✕
              </button>
            )}
            {menuExtender || (
              <button onClick={(e) => setMenuExtender((prev) => !prev)}>
                ☰
              </button>
            )}
          </div>

          {/* menu icons for desktop displays  */}
          <div className="flex hidden sm:block items-center">
            {navItems?.map((item) =>
              item.active ? (
                <NavLink className="" key={item.name} to={item.slug}>
                  <Button children={item.name} />
                </NavLink>
              ) : null
            )}
            {authStatus && (
              <button
                onClick={async (e) => {
                  dispatch(logout());
                  await authservice.logout();
                }}
                className="w-auto px-4 py-2 rounded-xl mx-auto text-lg leading-none hover:bg-gray-700"
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {/* mobile view menu extender  */}

        {menuExtender && (
          <div className="sm:hidden bg-gray-800 w-full flex flex-col text-white px-4 pt-8">
            {navItems?.map((item) =>
              item.active ? (
                <div
                  onClick={(e) => setMenuExtender((prev) => !prev)}
                  key={`mobile-${item.name}`}
                  className="text-xl border-t py-4 px-4 shadow-lg hover:bg-gray-700"
                >
                  <Link to={item.slug}>{item.name}</Link>
                </div>
              ) : null
            )}
            {authStatus && (
              <div
                onClick={async (e) => {
                  setMenuExtender((prev) => !prev);
                  dispatch(logout());
                  await authservice.logout();
                }}
                className="text-xl border-t py-4 px-4 shadow-lg hover:bg-gray-700"
              >
                Logout
              </div>
            )}

            <div className="border-t mb-10"></div>
          </div>
        )}
      </nav>
    </header>
  );
}

{
  /* <div className="w-full flex flex-col text-white px-4 mt-4">
              <div className="text-xl border-t py-2 px-4">{item.na}</div>
              <div className="border-t"></div>
            </div> */
}
