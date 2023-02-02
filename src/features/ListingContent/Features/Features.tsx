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
  const { garden, parking, epc_rating, fireplace } = features;

  return (
    <FeaturesStyled>
      {garden && (
        <FeatureStyled>
          <Leaf size={ICON_SIZE} />
          Garden
        </FeatureStyled>
      )}
      {parking && (
        <FeatureStyled>
          <Car size={ICON_SIZE} /> Parking
        </FeatureStyled>
      )}
      {fireplace && (
        <FeatureStyled>
          <Fire size={ICON_SIZE} /> Fireplace
        </FeatureStyled>
      )}
      {epc_rating && (
        <FeatureStyled>
          <House size={ICON_SIZE} /> EPC Rating {epc_rating}
        </FeatureStyled>
      )}
    </FeaturesStyled>
  );
};
