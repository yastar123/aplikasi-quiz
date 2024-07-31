const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-300 rounded overflow-hidden mt-16 ">
      <div
        className="bg-teal-400 h-7 transition-width duration-300 "
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
