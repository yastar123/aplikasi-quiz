import StarrySky from "../Animation/StarrSky";
import Anime from "../Animation/anime";
import React from "react";
import AnimationTyping from "../Animation/AnimationTyping";

const Error = () => {
  return (
    <div>
      <StarrySky />
      <Anime />
      <div className="relative bg-transparent">
        <div className="absolus w-full ">
          <AnimationTyping />
        </div>
      </div>
    </div>
  );
};

export default Error;
