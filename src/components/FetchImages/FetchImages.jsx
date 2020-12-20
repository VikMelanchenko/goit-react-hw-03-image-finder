import { Component } from 'react';
// import PropTypes from 'prop-types';
import fetchImages from '../../services/Api';
import ImageGallery from '../ImageGallery/ImageGallery';

export default class ImageGalleryInfo extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, nextState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    if (prevQuery !== nextQuery) {
      console.log('изменилось вводимое имя картинки');
      this.setState({ loading: true });
      fetchImages(prevQuery, nextQuery)
        .then((images) => this.setState({ images }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
      console.log(nextQuery);
    }
  }

  render() {
    const { hits, loading } = this.state;
    const { query } = this.props;
    const { error } = this.state;
    return (
      <div>
        {error && <h1>{error.message}</h1>}
        {loading && <div>Loading...</div>}
        {!query && <div>Please enter search item</div>}
        {hits && <div>{this.state.hits}</div>}
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
