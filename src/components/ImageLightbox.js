import React from "react";
import PropTypes from "prop-types";
import Lightbox from "react-image-lightbox";

const ImageLightbox = ({ images, setLightboxOpen }) => {
  const [imageIndex, setImageIndex] = React.useState(0);

  return (
    <Lightbox
      mainSrc={require("../" + images[imageIndex]).default}
      nextSrc={require("../" + images[(imageIndex + 1) % images.length]).default}
      prevSrc={require("../" + images[(imageIndex + images.length - 1) % images.length]).default}
      onCloseRequest={() => setLightboxOpen(false)}
      onMovePrevRequest={() => setImageIndex((imageIndex + images.length - 1) % images.length)}
      onMoveNextRequest={() => setImageIndex((imageIndex + 1) % images.length)}
      enableZoom={false}
    />
  );
};

ImageLightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setLightboxOpen: PropTypes.func.isRequired,
};

export default ImageLightbox;
