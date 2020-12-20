import { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/styles.css';

class ImageGalleryItem extends Component {
  render() {
    const { src, alt } = this.props;
    return (
      <li className="ImageGalleryItem">
        <img src={src} alt={alt} className="ImageGalleryItem-image" />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
