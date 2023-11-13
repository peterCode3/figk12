import PropTypes from "prop-types";

function CustomImage({ src, alt, imgclass }) {

  return (
    <img className={ `w-full ${imgclass}` } src={src} alt={alt} />
  );
}

CustomImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imgclass: PropTypes.string.isRequired,
};

export default CustomImage;