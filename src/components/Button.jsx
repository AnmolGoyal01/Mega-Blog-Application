import React from "react";

export default function Button({
  children,
  bgColor = "bg-transparent",
  textColor = "text-white",
  classname = "",
  ...props
}) {
  return (
    <button
      className={`w-auto px-4 py-2 rounded-xl mx-auto ${bgColor} ${textColor} ${classname} text-lg leading-none hover:bg-gray-700`}
      {...props}
    >
      {children}
    </button>
  );
}
