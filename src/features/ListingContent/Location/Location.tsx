import React, { ReactNode } from 'react';
import {
  LocalTransportStyled,
  LocationStyled,
  TransportOptionsStyled,
  TransportOptionStyled,
} from './Location.styled';
import { Map } from '../../Map/Map';
import { RailIcon, UndergroundIcon } from './icons';

type Coordinates = [number, number];

type TransportType = 'rail' | 'underground' | 'bus';

type TransportOption = {
  types: Array<TransportType>;
  station: string;
  distance_minutes: number;
};

type TransportOptions = Array<TransportOption>;

type Props = {
  location: {
    coords: Coordinates;
    local_transport: TransportOptions;
  };
};

export const Location: React.FC<Props> = ({ location }) => {
  const sortedTransportOptions = location.local_transport.sort((a, b) =>
    a.distance_minutes > b.distance_minutes ? 1 : 0
  );

  const transportIcons = (types: Array<TransportType>) => {
    const icons = [] as Array<ReactNode>;

    types.forEach((t) => {
      switch (t) {
        case 'underground':
          icons.push(UndergroundIcon());
          break;
        case 'rail':
          icons.push(RailIcon());
      }
    });

    return icons;
  };

  return (
    <LocationStyled>
      <Map coordinates={location.coords} />
      <LocalTransportStyled>
        <h4>Local Transport</h4>
        <TransportOptionsStyled>
          {sortedTransportOptions.map((option) => (
            <TransportOptionStyled key={option.station}>
              <span>{...transportIcons(option.types)}</span>
              <span>{option.station}</span>
              <span>{option.distance_minutes} minute walk</span>
            </TransportOptionStyled>
          ))}
        </TransportOptionsStyled>
      </LocalTransportStyled>
    </LocationStyled>
  );
};
