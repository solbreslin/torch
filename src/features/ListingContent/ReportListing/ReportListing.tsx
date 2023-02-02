import React from 'react';
import { Flag } from 'phosphor-react';
import { ActionText } from '../../constants';
import { ReportListingStyled } from './ReportListing.styled';

type Props = {
  id: string;
};

const ReportListing: React.FC<Props> = ({ id }) => {
  return (
    <ReportListingStyled href={'#'}>
      <Flag size={16} />
      <small>{ActionText.REPORT_LISTING}</small>
    </ReportListingStyled>
  );
};

export default ReportListing;
