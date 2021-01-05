import React, { Component } from 'react';
import Spinner from '../Loader/Loader';
import API from '../../services/Api';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageErrorView from '../ImageErrorView/ImageErrorView';
import PropTypes from 'prop-types';
import '../css/styles.css';

export default class ImageGalleryInfo extends Component {
  state = {
    images: [],
    status: 'idle',
    error: null,
    page: 1,
  };

  static propTypes = {
    query: PropTypes.string,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    // обновляет поиск при вводенового значения в input + обновляет поиск с первой страницы
    if (prevQuery !== nextQuery) {
      this.setState({ page: 1, images: [] });
    }

    // статус ожидает + спиннер
    if (prevQuery !== nextQuery) {
      this.setState({ status: 'pending' });

      this.fetchImagesGallery();
    }

    // scroll вниз
    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImagesGallery = () => {
    const nextQuery = this.props.query;

    API.fetchImages(nextQuery, this.state.page)
      .then((newImages) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...newImages],
          page: this.state.page + 1,
          status: 'resolved',
        }));
        if (newImages.length === 0) {
          throw new Error('Hmm...Nothing here. Try another search.');
        }
      })
      .catch((error) => this.setState({ error, status: 'rejected' }));
  };

  onLoadMore = () => {
    this.fetchImagesGallery();
  };

  render() {
    const { images, status, error } = this.state;
    if (status === 'idle') {
      return (
        <div style={{ textAlign: 'center' }}> Please enter search item</div>
      );
    }

    if (status === 'pending') {
      return <Spinner />;
    }

    if (status === 'rejected') {
      return <ImageErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={images} />
          <Button onClick={this.onLoadMore} />
        </>
      );
    }
    //   return (
    //     <div>
    //       {error && <h1>{error.message}</h1>}
    //       {loading && <Spinner className="spinner" />}
    //       {!query && <div> Please enter search item</div>}
    //       {hits && <div>{hits}</div>}
    //       <ImageGallery images={images} loadMore={OnLoadMore} />
    //       {loadMoreButton && <Button onClick={this.onLoadMore} />}
    //     </div>
    //   );
    // }
  }
}
