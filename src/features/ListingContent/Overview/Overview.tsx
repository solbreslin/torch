import React from 'react';
import {
  AvailabilityOverviewStyled,
  PropertyOverviewStyled,
} from './Overview.styled';
import {
  Armchair,
  Bathtub,
  Bed,
  User,
  Users,
  UsersThree,
} from 'phosphor-react';
import { formatISODateStringToString } from '../../../utils';

const ICON_SIZE = 21;

type PropertyOverview = {
  type: number;
  bedrooms: number;
  bathrooms: number;
  max_tenants: number;
  furnished: boolean;
};

type Duration = 'week' | 'month' | 'year';

type Availability = {
  start_date: string;
  min_tenancy: number;
  min_tenancy_unit: Duration;
};

type Props = {
  availability: Availability;
  property: PropertyOverview;
};

export const Overview: React.FC<Props> = ({ availability, property }) => {
  const { start_date, min_tenancy, min_tenancy_unit } = availability;
  const { type, bedrooms, bathrooms, furnished, max_tenants } = property;

  const maxTenants = max_tenants;
  const availableDate = formatISODateStringToString(start_date);

  let minimumTenancyCopy = `${min_tenancy} ${min_tenancy_unit}`;
  if (min_tenancy > 1) minimumTenancyCopy += 's';

  return (
    <>
      <PropertyOverviewStyled>
        <span>
          <span className={'sr-only'}>Number of beds</span>
          <Bed size={ICON_SIZE} />
          {bedrooms} bed
        </span>

        <span>
          <span className={'sr-only'}>Number of bathrooms</span>
          <Bathtub size={ICON_SIZE} />
          {bathrooms} bath
        </span>

        <span>
          <span className={'sr-only'}>Maximum number of tenants</span>
          {maxTenants === 1 ? (
            <>
              <User size={ICON_SIZE} />
              {maxTenants} tenant
            </>
          ) : maxTenants === 2 ? (
            <>
              <Users size={ICON_SIZE} />
              {maxTenants} tenants max
            </>
          ) : (
            <>
              <UsersThree size={ICON_SIZE} />
              {maxTenants} tenants max
            </>
          )}
        </span>

        {furnished && (
          <span>
            <Armchair size={ICON_SIZE} />
            Furnished
          </span>
        )}
      </PropertyOverviewStyled>

      <AvailabilityOverviewStyled>
        <span>Available from</span>
        <span>{availableDate}</span>
        <span>Minimum tenancy</span>
        <span>{minimumTenancyCopy}</span>
      </AvailabilityOverviewStyled>
    </>
  );
};
