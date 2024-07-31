import propsTypes from "prop-types";

const Img = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`${className}`} />;
};

Img.propTypes = {
  src: propsTypes.string,
  alt: propsTypes.string,
  className: propsTypes.string
};

export default Img;
