import Img from "../Elements/Img";
import React from "react";

const SocialButton = ({ imgSrc, altText }) => (
  <div
    className="p-4 flex justify-center items-center rounded-full border-2 border-slate-50 shadow
    hover:bg-gradient-to-r from-[#022f40] to-[#38a9cc]"
  >
    <Img src={imgSrc} alt={altText} className="w-5" />
  </div>
);

export default SocialButton;
