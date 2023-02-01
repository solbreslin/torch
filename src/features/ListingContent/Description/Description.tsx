import React, { useState } from 'react';
import { DescriptionStyled } from './Description.styled';
import Button from '../../../shared/Button/Button';
import { ActionText } from '../../constants';

type Props = {
  text: string;
};

const EXTRACT_CHAR_LENGTH = 500;

export const Description: React.FC<Props> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const htmlContent = isExpanded ? text : text.slice(0, EXTRACT_CHAR_LENGTH);
  const html = { __html: htmlContent };

  return (
    <DescriptionStyled hasFade={!isExpanded}>
      <div dangerouslySetInnerHTML={html}></div>

      {!isExpanded && (
        <Button onClick={() => setIsExpanded(true)} variant={'link'}>
          {ActionText.EXPAND_DESCRIPTION}
        </Button>
      )}
    </DescriptionStyled>
  );
};
