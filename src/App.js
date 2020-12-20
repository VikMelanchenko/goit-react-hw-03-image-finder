import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGalleryInfo from './components/Fetch/ImageGalleryInfo';

export default class App extends Component {
  state = {
    query: '',
  };
  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <ToastContainer autoClose={3000} /> */}
        <ImageGalleryInfo query={this.state.query} />
      </div>
    );
  }
}
