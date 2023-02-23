import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';
import { BigNumber } from 'ethers';

export type NextPageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
  authorization?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

export type CoinTypes = {
  icon: JSX.Element;
  code: string;
  name: string;
  price: number;
};

export interface Attachment {
  id: string;
  original: string;
  thumbnail: string;
}

export interface NFTPropertyType {
  background: string;
}
export interface NFTDataType {
  tokenId: number;
  // img: string;
  // name: string;
  // owner: string;
  price: number;
  // currency: string;
}

export interface ListingDataType {
  tokenId: string;
  name: string;
  price: BigNumber;
  isSold: boolean;
  exist: boolean;
}

export interface AttributeType {
  trait_type: string;
  value: string;
}
