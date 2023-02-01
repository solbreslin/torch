import React from 'react';
import { FeaturesStyled, FeatureStyled } from './Features.styled';
import { Car, Fire, House, Leaf } from 'phosphor-react';

type EPCRating = 'A' | 'B' | 'C' | 'D';

type Features = {
  garden: boolean;
  parking: boolean;
  fireplace: boolean;
  epc_rating: EPCRating;
};

type Props = {
  features: Features;
};

const ICON_SIZE = 21;

export const Features: React.FC<Props> = ({ features }) => {
  return (
    <FeaturesStyled>
      {features.garden && (
        <FeatureStyled>
          <Leaf size={ICON_SIZE} />
          Garden
        </FeatureStyled>
      )}
      {features.parking && (
        <FeatureStyled>
          <Car size={ICON_SIZE} /> Parking
        </FeatureStyled>
      )}
      {features.fireplace && (
        <FeatureStyled>
          <Fire size={ICON_SIZE} /> Fireplace
        </FeatureStyled>
      )}
      {features.epc_rating && (
        <FeatureStyled>
          <House size={ICON_SIZE} /> EPC Rating {features.epc_rating}
        </FeatureStyled>
      )}
    </FeaturesStyled>
  );
};
