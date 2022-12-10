import CardComponent from './card-component';
import { CardOffer } from '../../types/offer';
import {useState} from 'react';

type CardListProps = {
  offers: CardOffer[];
};

const CardList = (props: CardListProps) => {
  const { offers } = props;

  const [ , setActiveCard] = useState<number>();

  const onMouseOver = (id:number) => {
    setActiveCard(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <CardComponent key={offer.id} onMouseOver={onMouseOver} offer={offer} />) }
    </div>
  );
};

export default CardList;
