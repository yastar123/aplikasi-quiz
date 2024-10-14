import React from "react";

const Button = ({ label, onClick, type = "submit", className = "" }) => (
  <button
    className={`font-semibold w-full text-lg text-white py-3 px-5 rounded-lg border ${className}`}
    type={type}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
