import AnimationLoading from "../Animation/AnimationLoading";
import Anime from "../Animation/anime";
import StarrySky from "../Animation/StarrSky";
import React from "react";

const Loading = () => {
  return (
    <div>
      <Anime />
      <StarrySky />
      <div className="relative">
        <div className="absolue">
          <AnimationLoading />
        </div>
      </div>
    </div>
  );
};

export default Loading;
