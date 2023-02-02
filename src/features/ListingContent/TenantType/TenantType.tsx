import { TenantTypesStyled } from './TenantType.styled';
import React from 'react';
import {
  CheckCircle,
  Info,
  PawPrint,
  Skull,
  Student,
  UsersFour,
  X,
} from 'phosphor-react';

type Tenant = {
  display: string;
  value: boolean;
};

type Preferences = {
  students: Tenant;
  families: Tenant;
  pets: Tenant;
  smokers: Tenant;
  dss_lha: Tenant;
};

type Props = {
  tenant: Preferences;
};

const ICON_SIZE = 21;

const TenantType: React.FC<Props> = ({ tenant }) => {
  const { smokers, pets, dss_lha, families, students } = tenant;
  const preferenceList = Object.entries(tenant);

  const accepted = preferenceList.filter((pref) => pref[1].value);
  const notAccepted = preferenceList.filter((pref) => !pref[1].value);

  console.log(accepted[0][1].display);

  return (
    <TenantTypesStyled>
      <ul>
        {accepted.map((a) => (
          <li key={a[0]}>
            <CheckCircle size={ICON_SIZE} fill={'green'} weight={'fill'} />{' '}
            {a[1].display}
          </li>
        ))}
      </ul>
      <ul>
        {notAccepted.map((a) => (
          <li key={a[0]}>
            <X size={ICON_SIZE} color={'#d74141'} /> {a[1].display}
          </li>
        ))}
      </ul>
    </TenantTypesStyled>
  );
};

export default TenantType;
