import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import FetchImages from './components/FetchImages/FetchImages';
// import ImageGallery from './components/ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    query: '',
    id: '',
    // images: [],
  };
  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <ToastContainer autoClose={3000} /> */}
        <FetchImages query={this.state.query} />
        {/* <ImageGallery images={images} /> */}
      </div>
    );
  }
}
