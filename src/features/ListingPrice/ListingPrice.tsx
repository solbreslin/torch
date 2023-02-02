import React from 'react';
import {
  AdditionalInfoStyled,
  AmountStyled,
  FeesStyled,
  ListingPriceStyled,
} from './ListingPrice.styled';
import Button from '../../shared/Button/Button';
import { Bank, CheckCircle, X } from 'phosphor-react';
import { ActionText } from '../constants';
import { formatPrice } from '../../utils';

type Price = {
  deposit: number;
  pcm: number;
  pw: number;
  currency: string;
  bills_included: boolean;
};

type Props = {
  price: Price;
};

export const ListingPrice: React.FC<Props> = ({ price }) => {
  return (
    <ListingPriceStyled>
      <AmountStyled>
        <h2>
          <span className={'sr-only'}>Price</span>
          {formatPrice(price.pcm)} <small>per month</small>
        </h2>
        <small>{formatPrice(price.pw)} per week</small>
      </AmountStyled>
      <hr />
      <AdditionalInfoStyled>
        <p>
          <Bank size={21} color={'grey'} /> Deposit {formatPrice(price.deposit)}
        </p>
        <p>
          {price.bills_included ? (
            <>
              <CheckCircle size={21} fill={'green'} weight={'fill'} />
              Bills included
            </>
          ) : (
            <>
              <X size={21} color={'grey'} />
              Bills not included
            </>
          )}
        </p>
      </AdditionalInfoStyled>
      <hr />
      <FeesStyled>
        <p>
          <CheckCircle size={21} fill={'green'} weight={'fill'} />
          No admin fees
        </p>
        <p>
          <CheckCircle size={21} fill={'green'} weight={'fill'} />
          No hidden charges
        </p>
      </FeesStyled>

      <Button onClick={() => {}}>{ActionText.CONTACT_LANDLORD}</Button>
    </ListingPriceStyled>
  );
};
