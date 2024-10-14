import Input from "../Elements/Input";
import React from "react";

const InputLogin = ({ placeholder, text, className, value, onChange }) => {
  return (
    <div>
      <p>{text}</p>
      <Input
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className={`w-full bg-slate-100 rounded-full focus:outline-none focus:ring-0 pl-4 py-3 mt-3 ${className}`}
      />
    </div>
  );
};

export default InputLogin;
