import { CardOffer } from '../../types/offer';

type MapProps = {
  offer: CardOffer;
};


const MapComponent = (props: MapProps): JSX.Element => {
  const {offer} = props;
  const {
    lat,
    lng
  } = offer;

  return (
    <div className='cities__right-section'>
      <section className='cities__map map'></section>
    </div>
  );
};

export default MapComponent;
