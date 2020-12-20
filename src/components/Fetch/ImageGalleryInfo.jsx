import { Component } from 'react';

export default class ImageGalleryInfo extends Component {
  state = {
    hits: null,
    loading: false,
  };
  componentDidUpdate(prevProps, nextState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    if (prevQuery !== nextQuery) {
      console.log('изменилось вводимое имя картинки');
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${nextQuery}&page=1&key=19112530-d5af3423794dd47ca2e19dee1&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then((hits) => this.setState([hits]))
        .finally(() => this.setState({ loading: false }));
      console.log(nextQuery);
    }
  }

  render() {
    const { hits, loading } = this.state;
    const { query } = this.props;
    return (
      <div>
        {loading && <div>Loading...</div>}
        {!query && <div>Please enter search item</div>}
        {hits && <div>{this.state.hits}</div>}
      </div>
    );
  }
}
