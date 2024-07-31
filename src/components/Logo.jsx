import React from "react";

export default function Logo({ className = "", ...props }) {
  return (
    <div className={`${className} w-full max-w-xl`} {...props}>
      My Blog
    </div>
  );
}
