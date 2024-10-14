import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import StarrySky from "./StarrSky";


const Anime = () => {
  const wave1 =
      "M0 43.3224L50 45.7294C100 48.1364 200 52.9494 300 67.3904C400 81.8314 500 105.9 600 98.679C700 91.458 800 52.9494 900 43.3224C1000 33.6954 1100 52.9494 1150 62.5764L1200 72.203V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V43.3224Z",
    wave2 =
      "M0 100L50 97.6192C100 95.2384 200 90.4768 300 90.4768C400 90.4768 500 95.2384 600 92.8576C700 90.4768 800 80.952 900 78.5712C1000 76.1904 1100 80.952 1150 83.3336L1200 85.7144V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V100Z",
    wave3 =
      "M0 100L50 95.2384C100 90.4768 200 80.952 300 66.6668C400 52.3816 500 33.3336 600 40.476C700 47.6184 800 80.952 900 85.7144C1000 90.4768 1100 66.6668 1150 54.7624L1200 42.8576V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V100Z",
    wave4 =
      "M0 50L50 44.4444C100 38.8888 200 27.7776 300 38.8888C400 50 500 83.3336 600 94.4448C700 105.556 800 94.4448 900 91.6664C1000 88.888 1100 94.4448 1150 97.2224L1200 100V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V50Z";

  useEffect(() => {
    anime({
      targets: ".wave-top path",
      easing: "linear",
      duration: 7500,
      loop: true,
      d: [
        { value: [wave1, wave2] },
        { value: wave3 },
        { value: wave4 },
        { value: wave1 },
      ],
    });
  }, []);

  return (
    <div className=" relative z-0 flex items-center justify-center bg-darkblue text-white">
      <svg
        className="wave-top absolute top-0 left-0 w-full"
        viewBox="0 0 300 100"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#022f40" />
            <stop offset="100%" stopColor="#38a9cc" />
          </linearGradient>
        </defs>
        <path fillRule="evenodd" clipRule="evenodd" d={wave1} fill="url(#gradient)" />
      </svg>
      <StarrySky />
    </div>
  );
};

export default Anime;
