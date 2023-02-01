import React, { ReactNode } from 'react';
import ContentBlockStyled from './ContentBlock.styled';

type Props = { children: ReactNode; title?: string };

const ContentBlock: React.FC<Props> = ({ children, title }) => {
  return (
    <ContentBlockStyled>
      {title && <h3>{title}</h3>}
      {children}
    </ContentBlockStyled>
  );
};

export default ContentBlock;
