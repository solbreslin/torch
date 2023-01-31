import React from 'react';
import { Description } from './Description/Description';
import ContentBlock from '../../shared/ContentBlock/ContentBlock';
import { Features } from './Features/Features';
import { Overview } from './Overview/Overview';
import { Map } from '../Map/Map';
import { LandlordProfile } from '../LandlordProfile/LandlordProfile';
import { ListingContentStyled } from './ListingContent.styled';
import { ListingPrice } from '../ListingPrice/ListingPrice';

type Props = {
  data: any;
};

export const ListingContent: React.FC<Props> = ({ data }) => {
  return (
    <ListingContentStyled>
      <div>
        <h1>{data.title}</h1>
        <ContentBlock>
          <Overview data={data.overview} />
        </ContentBlock>
        <ContentBlock>
          <Features data={data.features} />
        </ContentBlock>
        <ContentBlock>
          <Description text={data.description} />
        </ContentBlock>
        <ContentBlock>
          <Map />
        </ContentBlock>
        <ContentBlock>
          <LandlordProfile landlord={data.landlord} />
        </ContentBlock>
      </div>
      <div>
        <ListingPrice data={'test'} />
      </div>
    </ListingContentStyled>
  );
};
