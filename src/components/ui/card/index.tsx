import { useModal } from '@/components/modal-views/context';
import { NFTDataType } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Button from '../button/button';

type CardType = 'sell' | 'buy' | 'change_price';

interface CardProps {
  card: NFTDataType;
  cardType?: CardType;
}

const Card: FC<CardProps> = ({ card, cardType = 'buy' }) => {
  const router = useRouter();
  let btnText = '';
  const { openModal } = useModal();
  switch (cardType) {
    case 'sell':
      btnText = 'Sell';
      break;
    case 'change_price':
      btnText = 'Change price';
      break;
    default:
      btnText = 'Buy';
      break;
  }
  const buySubmit = (card: NFTDataType) => {
    if (cardType === 'change_price') openModal('CHANGE_PRICE', card);
  };
  const showDetail = () => {
    router.push(`/marketplace/${card.id}`);
  };
  return (
    <>
      <div className="max-w-[250px] cursor-pointer rounded-xl bg-white p-5 shadow-card">
        <div className="relative w-full">
          <img
            className="rounded-lg bg-gray-100 p-2"
            src={card.img}
            alt={card.name}
            onClick={() => showDetail()}
          />
        </div>
        <p className="mt-2 font-semibold text-gray-600">{card.name}</p>
        <p className="text-gray-400">{card.owner}</p>
        <p className="my-2 font-semibold text-gray-600">
          {card.price} {card.currency}
        </p>
        <Button
          className="mt-5"
          size="block"
          color="primary"
          shape="rounded"
          onClick={() => buySubmit(card)}
        >
          {btnText}
        </Button>
        {cardType === 'change_price' && (
          <a className="mx-auto mt-3 flex cursor-pointer justify-center underline">
            Remove listing
          </a>
        )}
      </div>
    </>
  );
};

export default Card;
