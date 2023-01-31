import { ListingPageHeaderStyled } from './ListingPageHeader.styled';
import BackLink from '../BackLink/BackLink';
import { ListingActions } from '../ListingActions/ListingActions';
import React from 'react';

type Props = {
  id: string;
};

export const ListingPageHeader: React.FC<Props> = ({ id }) => (
  <ListingPageHeaderStyled>
    <BackLink />
    <ListingActions id={id} />
  </ListingPageHeaderStyled>
);
