import React, { ReactNode } from 'react';
import ContentBlockStyled from './ContentBlock.styled';

type Props = { children: ReactNode };

const ContentBlock: React.FC<Props> = ({ children }) => {
  return <ContentBlockStyled>{children}</ContentBlockStyled>;
};

export default ContentBlock;
