import React from "react";

const Input = ({ id, label, value, onChange, placeholder, className, type = "text" }) => (
  <div className={`group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30 ${className}`}>
    <div className="flex justify-between">
      <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">{label}</label>
    </div>
    <div className="flex justify-between">
      <div className="absolute right-3 -translate-y-1 text-green-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
    <input
      id={id}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
    />
  </div>
);

export default Input;
