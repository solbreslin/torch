import React from 'react';
import { Root } from './Stats.styled';

import { data } from './data';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <Root>
      {data.map((d) => (
        <div key={d.stat}>
          <CountUp end={d.number} duration={2} suffix={'%'} />
          <p>{d.stat}</p>
        </div>
      ))}
    </Root>
  );
};

export default Stats;
