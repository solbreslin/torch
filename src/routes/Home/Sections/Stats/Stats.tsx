import React from 'react';
import { Root } from './Stats.styled';

import { data } from './data';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <Root>
      {data.map((d) => (
        <div key={d.stat}>
          <CountUp
            enableScrollSpy={true}
            scrollSpyOnce={true}
            end={d.number}
            duration={2}
            suffix={'%'}
          />
          <p style={{ fontSize: '1.25rem' }}>{d.stat}</p>
        </div>
      ))}
    </Root>
  );
};

export default Stats;
