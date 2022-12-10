import SignOutHeaderComponent from '../../components/header-components/sign-out-header-component';
import { CardOffer } from '../../types/offer';
import FormComponent from '../../components/cards-components/form-component';
import { CardReview } from '../../types/review';
import ReviewsListComponent from '../../components/cards-components/reviews-list-component';
import MapComponent from '../../components/cards-components/map-component';
import CardList from '../../components/cards-components/card-list';

type PropertyPageProps = {
  offer: CardOffer;
  reviews: CardReview[];
  offers: CardOffer[];
  selectedOffer: CardOffer;
};

const PropertyPage = ({offer, offers, selectedOffer, reviews}: PropertyPageProps): JSX.Element => {
  // const { offer } = props;
  const {
    src,
    title,
    description,
    premium,
    type,
    rating,
    bedrooms,
    guests,
    price,
    facilities,
    proInfo,
  } = offer;

  return (
    <div className='page'>
      <SignOutHeaderComponent />

      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              <div className='property__image-wrapper'>
                <img
                  className='property__image'
                  src={src}
                  alt='Photo studio'
                />
              </div>
              <div className='property__image-wrapper'>
                <img
                  className='property__image'
                  src={src}
                  alt='Photo studio'
                />
              </div>
              <div className='property__image-wrapper'>
                <img
                  className='property__image'
                  src={src}
                  alt='Photo studio'
                />
              </div>
              <div className='property__image-wrapper'>
                <img
                  className='property__image'
                  src={src}
                  alt='Photo studio'
                />
              </div>
              <div className='property__image-wrapper'>
                <img
                  className='property__image'
                  src={src}
                  alt='Photo studio'
                />
              </div>
              <div className='property__image-wrapper'>
                <img
                  className='property__image'
                  src={src}
                  alt='Photo studio'
                />
              </div>
            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>
              <div className='property__mark'>
                <span>{premium}</span>
              </div>
              <div className='property__name-wrapper'>
                <h1 className='property__name'>
                  {title}
                </h1>
                <button
                  className='property__bookmark-button button'
                  type='button'
                >
                  <svg
                    className='property__bookmark-icon'
                    width='31'
                    height='33'
                  >
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={{ width: '80%' }}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>
                  {rating}
                </span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  {bedrooms} Bedrooms
                </li>
                <li className='property__feature property__feature--adults'>
                  Max {guests} adults
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>
                <ul className='property__inside-list'>
                  <li className='property__inside-item'>{facilities}</li>
                  <li className='property__inside-item'>{facilities}</li>
                  <li className='property__inside-item'>{facilities}</li>
                  <li className='property__inside-item'>{facilities}</li>
                  <li className='property__inside-item'>{facilities}</li>
                  <li className='property__inside-item'>{facilities}</li>
                  <li className='property__inside-item'>{facilities}</li>
                  <li className='property__inside-item'>{facilities}</li>
                  <li className='property__inside-item'>{facilities}</li>
                  <li className='property__inside-item'>{facilities}</li>
                </ul>
              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                    <img
                      className='property__avatar user__avatar'
                      src='img/avatar-angelina.jpg'
                      width='74'
                      height='74'
                      alt='Host avatar'
                    />
                  </div>
                  <span className='property__user-name'>Angelina</span>
                  <span className='property__user-status'>{proInfo}</span>
                </div>
                <div className='property__description'>
                  <p className='property__text'>
                    {description}
                  </p>
                  <p className='property__text'>
                    {description}
                  </p>
                </div>
              </div>
              <section className='property__reviews reviews'>
                <ReviewsListComponent reviews={reviews}/>
                <FormComponent/>
              </section>
            </div>
          </div>
          <section className='property__map map'>
            <MapComponent offers={offers.slice(0,3)} selectedOffer={selectedOffer} maxWidth={'1144px'}/>
          </section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>
              Other places in the neighbourhood
            </h2>
            <div className='near-places__list places__list'>
              <CardList offers={offers.slice(0,3)}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PropertyPage;
