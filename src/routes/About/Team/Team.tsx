import React from 'react';
import { Root } from './Team.styled';
import { data } from './data';

const generateSrcset = (path: string) => {
  const base = 'https://res.cloudinary.com/sbreslin/image/upload';
  const sizes = [320, 480];

  return sizes.map((s) => `${base}/f_auto,q_70,w_${s}/${path} ${s}w`).join(',');
};

const Team = () => {
  const processedData = data.map((d) => ({
    ...d,
    srcset: generateSrcset(d.image),
  }));

  return (
    <Root>
      {processedData.map((d) => (
        <div key={d.name}>
          <img srcSet={d.srcset} alt={d.name} />
        </div>
      ))}
    </Root>
  );
};

export default Team;
