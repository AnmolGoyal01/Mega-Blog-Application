import React, { forwardRef, useId } from "react";

function Select({ label, options = [], classname = "", ...props }, ref) {
  const labelId = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={labelId}
          className="w-full mb-1 inline-block text-white"
        >
          {label}
        </label>
      )}
      <select
        id={labelId}
        className={`${classname} w-full px-2 py-1 rounded-lg`}
        {...props}
        ref={ref}
      >
        {options?.map((option) => (
          <option key={option} value={option} >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
