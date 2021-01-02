import { Component } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

import '../css/styles.css';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: null,
  };

  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { src, alt, largeImageURL } = this.props;
    const { showModal } = this.state;
    return (
      <li className="ImageGalleryItem">
        <img
          src={src}
          alt={alt}
          className="ImageGalleryItem-image"
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImageURL} alt={alt} />
        )}
      </li>
    );
  }
}
