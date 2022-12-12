import CardComponent from './card-component';
import { CardOffer } from '../../types/offer';

type CardListProps = {
  offers: CardOffer[];
  setActiveCard?: (id:number) => void;

};

const CardList = (props: CardListProps) => {
  const {offers, setActiveCard} = props;


  const onMouseOver = (id:number) => {
    setActiveCard?.(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <CardComponent key={offer.id} onMouseOver={onMouseOver} offer={offer}/>) }
    </div>
  );
};

export default CardList;
