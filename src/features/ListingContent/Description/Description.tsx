import React from 'react';

type Props = {
  text: string;
};

export const Description: React.FC<Props> = ({ text }) => {
  return <div>{text}</div>;
};
