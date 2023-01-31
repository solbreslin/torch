import React from 'react';
import { OverviewStyled } from './Overview.styled';
import { Bathtub, Bed, User, Users, UsersThree } from 'phosphor-react';

const ICON_SIZE = 21;

enum PropertyType {
  'House',
  'Flat',
}

type Overview = {
  type: number;
  bedrooms: number;
  bathrooms: number;
  max_tenants: number;
};

type Props = {
  data: Overview;
};

export const Overview: React.FC<Props> = ({ data }) => {
  return (
    <OverviewStyled>
      <span>
        <Bed size={ICON_SIZE} /> {data.bedrooms} bed
      </span>

      <span>
        <Bathtub size={ICON_SIZE} /> {data.bathrooms} bath
      </span>

      <span>
        {data.max_tenants === 1 ? (
          <>
            <User size={ICON_SIZE} /> {data.max_tenants} tenant
          </>
        ) : data.max_tenants === 2 ? (
          <>
            <Users size={ICON_SIZE} /> {data.max_tenants} tenants max
          </>
        ) : (
          <>
            <UsersThree size={ICON_SIZE} /> {data.max_tenants} tenants max
          </>
        )}
      </span>
    </OverviewStyled>
  );
};
