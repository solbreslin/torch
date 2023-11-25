import React from 'react';
import { Root } from './Survey.styled';

import { Widget } from '@typeform/embed-react';
const SurveyPage = () => {
  return (
    <Root>
      <Widget
        id="T49g6Tfg"
        style={{ height: 'calc(100vh - 70px)' }}
        inlineOnMobile={true}
      />
    </Root>
  );
};

export default SurveyPage;
