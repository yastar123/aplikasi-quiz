import React from "react";
const Img = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`${className}`} />;
};

export default Img;
