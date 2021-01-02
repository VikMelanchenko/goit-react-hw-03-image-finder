import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import '../css/styles.css';

export default class SearchForm extends Component {
  state = {
    query: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  // добавление значения в input
  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  // сабмит формы
  handleSubmit = (e) => {
    // страница не перезагружается
    e.preventDefault();

    //   проверка на пусту строку и вызов алерта
    if (this.state.query.trim() === '') {
      toast.error('Please enter your search item');
    }
    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });

    this.reset();
  };

  // очистка input
  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            // autocomplete="off"
            // autofocus
            value={this.state.query}
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
