import { NFTDataType } from '@/types';
import React, { FC } from 'react';
import Card from '../ui/card';

interface MarketPlaceBuyProps {
  items: Array<NFTDataType>;
}

const MarketPlaceBuy: FC<MarketPlaceBuyProps> = ({ items }) => {
  return (
    <div className="my-10 flex flex-wrap gap-4 py-10 ">
      {items.map((card, cardIdx) => {
        return (
          <React.Fragment key={`${card.name}_${cardIdx}`}>
            <Card card={card} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default MarketPlaceBuy;
