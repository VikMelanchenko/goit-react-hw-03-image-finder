import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar/Searchbar';
import FetchImages from './components/FetchImages/FetchImages';

export default class App extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
        <FetchImages query={query} />
      </div>
    );
  }
}
