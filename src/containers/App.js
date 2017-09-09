import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counter';

class CounterApp extends PureComponent {
  render() {
    const { state, actions } = this.props;
    return (
      <Counter
        count={state.count}
        {...actions}
      />
    );
  }
}

CounterApp.propTypes = {
  state: PropTypes.shape({
    count: PropTypes.number.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  }).isRequired,
};


export default connect(state => ({
  state: state.counter,
}),
dispatch => ({
  actions: bindActionCreators(counterActions, dispatch),
}),
)(CounterApp);
