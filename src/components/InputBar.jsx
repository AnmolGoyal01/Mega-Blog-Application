import { forwardRef, useId } from "react";

function InputBar({ label, type = "text", className = "", ...props }, ref) {
  const labelId = useId();
  return (
    <>
      <div className="mb-4">
        {label && (
          <label
            htmlFor={labelId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={labelId}
          {...props}
          ref={ref}
          className={` shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
        />
      </div>
    </>
  );
}

export default forwardRef(InputBar);
