import React from 'react';
import { Description } from './Description/Description';
import ContentBlock from '../../shared/ContentBlock/ContentBlock';
import { Features } from './Features/Features';
import { Overview } from './Overview/Overview';
import { Location } from './Location/Location';
import { LandlordProfile } from '../LandlordProfile/LandlordProfile';
import { ListingContentStyled } from './ListingContent.styled';
import { ListingPrice } from '../ListingPrice/ListingPrice';
import { Flag } from 'phosphor-react';
import { ActionText } from '../constants';

type Props = {
  data: any;
};

export const ListingContent: React.FC<Props> = ({ data }) => {
  const {
    title,
    property_overview,
    availability,
    description,
    features,
    location,
    landlord,
    price,
  } = data;

  return (
    <ListingContentStyled>
      <div>
        <h1>{title}</h1>

        <ContentBlock>
          <Overview property={property_overview} availability={availability} />
        </ContentBlock>

        <ContentBlock title={'Overview'}>
          <Description text={description} />
        </ContentBlock>

        <ContentBlock title={'Features'}>
          <Features features={features} />
        </ContentBlock>

        <ContentBlock title={'Location'}>
          <Location location={location} />
        </ContentBlock>

        <ContentBlock title={'Meet the landlord'}>
          <LandlordProfile landlord={landlord} />
        </ContentBlock>
      </div>

      <div>
        <ListingPrice price={price} />

        <a href={'#'}>
          <Flag size={16} />
          <small>{ActionText.REPORT_LISTING}</small>
        </a>
      </div>
    </ListingContentStyled>
  );
};
