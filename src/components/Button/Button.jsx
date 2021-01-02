import { Component } from 'react';
import '../css/styles.css';
import PropTypes from 'prop-types';

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="load__button">
        <button className="Button" type="button" onClick={this.props.onClick}>
          Load More
        </button>
      </div>
    );
  }
}
