/* eslint react/prop-types: 0 */
import React, { Component } from 'react';

export default class LazyRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      showLoader: false,
    };
  }

  componentDidMount() {
    this.props.component.then((module) => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }

  render() {
    const { loaded } = this.state;
    return (loaded === true ? <this.component {...this.props} /> : <div />);
  }
}
