import React from 'react';
import PropTypes from 'prop-types';
import style from './counter.scss';

const Counter = ({ count, increment, decrement, incrementAsync }) => (
  <div className={style.counter}>
    Clicked: {count} times
    <button onClick={increment}>
      +
    </button>
    {' '}
    <button onClick={decrement}>
      -
    </button>
    <button onClick={incrementAsync}>
      Increment async
    </button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
};

export default Counter;
