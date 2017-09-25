import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as counterActions from '../actions/counter';


class CounterApp extends PureComponent {
  render() {
    const { state, actions } = this.props;
    return (
      <div>
        <Counter
          count={state.count}
          {...actions}
        />
        <Link to="/login">Login</Link>
      </div>
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

const mapStateToProps = state => ({ state: state.counter });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(counterActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
