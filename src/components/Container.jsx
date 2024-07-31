import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <div className={`${className} w-full max-w-7xl px-4 py-2`}>{children}</div>
  );
}
