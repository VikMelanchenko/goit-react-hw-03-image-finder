import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class Spinner extends Component {
  //other logic
  render() {
    return (
      <Loader
        className="spinner"
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
      />
    );
  }
}
