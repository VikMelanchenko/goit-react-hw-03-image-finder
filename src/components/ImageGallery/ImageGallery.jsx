import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import '../css/styles.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map((element, id) => (
        <ImageGalleryItem
          key={element.id}
          src={element.webformatURL}
          largeImageUrl={element.largeImageURL}
          alt={element.tags}
          id={element.id}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
