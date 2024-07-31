import PropTypes from "prop-types";
import Img from "../Elements/Img";

const SocialButton = ({ imgSrc, altText }) => (
  <div
    className="p-4 flex justify-center items-center rounded-full border-2 border-slate-50 shadow
    hover:bg-gradient-to-r from-[#022f40] to-[#38a9cc]"
  >
    <Img src={imgSrc} alt={altText} className="w-5" />
  </div>
);

SocialButton.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default SocialButton;
