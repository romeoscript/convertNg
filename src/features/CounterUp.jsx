
import React from 'react';
import CountUp from 'react-countup';


const Counter = ({ start = 0, end, delay = 0, duration = 2, prefix = '', suffix = '', className = '' }) => {
  return (
    <div className={className}>
      <CountUp
        start={start}
        end={end}
        delay={delay}
        duration={duration}
        prefix={prefix}
        suffix={suffix}
      /> +
    </div>
  );
};

export default Counter;
