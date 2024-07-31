import React from 'react';
import anime from 'animejs';

class StarrySky extends React.Component {
  state = {
    num: 60,
    vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  };

  starryNight = () => {
    anime({
      targets: ["#sky .star"],
      opacity: [
        { duration: 200, value: "0" },
        { duration: 200, value: "1" }
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i
    });
  };

  shootingStars = () => {
    anime({
      targets: ["#shootingstars .wish"],
      easing: "linear",
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [
        { duration: 700, value: "1" }
      ],
      width: [
        { value: "450px" },
        { value: "0px" }
      ],
      translateX: 350
    });
  };

  randomRadius = () => Math.random() * 0.7 + 0.6;

  getRandomX = () => Math.floor(Math.random() * Math.floor(this.state.vw)).toString();

  getRandomY = () => Math.floor(Math.random() * Math.floor(this.state.vh)).toString();

  componentDidMount() {
    this.starryNight();
    this.shootingStars();
  }

  render() {
    const { num } = this.state;
    return (
      <div id="App" className="bg-gradient-to-r from-[#011e36] to-[#2d8ca8] overflow-hidden">
        <svg id="sky" className="w-screen h-screen fixed overflow-hidden m-0 p-0">
          {[...Array(num)].map((_, y) => (
            <circle
              cx={this.getRandomX()}
              cy={this.getRandomY()}
              r={this.randomRadius()}
              stroke="none"
              strokeWidth="0"
              fill="white"
              key={y}
              className="star"
            />
          ))}
        </svg>
        <div id="shootingstars" className="m-0 p-0 w-[150vh] h-[100vw] fixed overflow-hidden transform translate-x-[calc(50vw-50%)] translate-y-[calc(50vh-50%)] rotate-[120deg]">
          {[...Array(60)].map((_, y) => (
            <div
              key={y}
              className="wish h-[2px] top-[300px] w-[100px] m-0 opacity-0 p-0 absolute bg-gradient-to-r from-white to-transparent filter drop-shadow-[0_0_6px_white] overflow-hidden"
              style={{
                left: `${this.getRandomY()}px`,
                top: `${this.getRandomX()}px`
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default StarrySky;
