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
import ReportListing from './ReportListing/ReportListing';
import TenantType from './TenantType/TenantType';

type Props = {
  data: any;
};

export const ListingContent: React.FC<Props> = ({ data }) => {
  const {
    id,
    title,
    property_overview,
    availability,
    description,
    features,
    location,
    landlord,
    price,
    tenant_type,
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

        <ContentBlock title={'Tenant preference'}>
          <TenantType tenant={tenant_type} />
        </ContentBlock>

        <ContentBlock title={'Meet the landlord'}>
          <LandlordProfile landlord={landlord} />
        </ContentBlock>

        <ContentBlock>
          <small>Property reference {id}</small>
        </ContentBlock>
      </div>

      <div>
        <ListingPrice price={price} />
        <ReportListing id={id} />
      </div>
    </ListingContentStyled>
  );
};
