import React from 'react';
import {
  LandlordAvatarStyled,
  LandlordNameStyled,
  LandlordProfileStyled,
  LandlordResponseStyled,
} from './LandlordProfile.styled';
import { ShieldCheck } from 'phosphor-react';
import Button from '../../shared/Button/Button';

type Response = {
  rate: number;
  time_minutes: number;
};

type Landlord = {
  name: string;
  profile_url?: string;
  verified: boolean;
  response: Response;
};

type Props = {
  landlord: Landlord;
};

export const LandlordProfile: React.FC<Props> = ({ landlord }) => {
  const responseTimeCopy =
    landlord.response.time_minutes < 60
      ? 'within an hour'
      : `within ${Math.round(landlord.response.time_minutes / 60)} hours`;

  return (
    <LandlordProfileStyled>
      <LandlordAvatarStyled>
        <img src={landlord.profile_url} alt={'Profile of' + landlord.name} />
      </LandlordAvatarStyled>
      <div>
        <LandlordNameStyled>
          {landlord.name}
          {landlord.verified && (
            <span title={'Verified'}>
              <ShieldCheck size={18} weight={'fill'} fill={'green'} />
              <small className="sr-only">Verified</small>
            </span>
          )}
        </LandlordNameStyled>
      </div>
      <LandlordResponseStyled>
        <span>Response rate</span>
        <span>{landlord.response.rate}%</span>
        <span>Response time</span>
        <span>{responseTimeCopy}</span>
      </LandlordResponseStyled>
    </LandlordProfileStyled>
  );
};
