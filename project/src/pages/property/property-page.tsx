import PropertyComponent from '../../components/cards-components/card-component';
import SignOutHeaderComponent from '../../components/header-components/sign-out-header-component';
import { CardOffer } from '../../types/offer';
import FormComponent from '../../components/cards-components/form-component';
import { CardReview } from '../../types/review';

type PropertyPageProps = {
  offer: CardOffer;
  review: CardReview;
};

const PropertyPage = ({offer, review}: PropertyPageProps): JSX.Element => {
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
                <h2 className='reviews__title'>
                  Reviews &middot; <span className='reviews__amount'>1</span>
                </h2>
                <ul className='reviews__list'>
                  <li className='reviews__item'>
                    <div className='reviews__user user'>
                      <div className='reviews__avatar-wrapper user__avatar-wrapper'>
                        <img
                          className='reviews__avatar user__avatar'
                          src='img/avatar-max.jpg'
                          width='54'
                          height='54'
                          alt='Reviews avatar'
                        />
                      </div>
                      <span className='reviews__user-name'>Max</span>
                    </div>
                    <div className='reviews__info'>
                      <div className='reviews__rating rating'>
                        <div className='reviews__stars rating__stars'>
                          <span style={{ width: '80%' }}></span>
                          <span className='visually-hidden'>Rating</span>
                        </div>
                      </div>
                      <p className='reviews__text'>
                        A quiet cozy and picturesque that hides behind a a river
                        by the unique lightness of Amsterdam. The building is
                        green and from 18th century.
                      </p>
                      <time className='reviews__time' dateTime='2019-04-24'>
                        April 2019
                      </time>
                    </div>
                  </li>
                </ul>
                <FormComponent review={review}/>
              </section>
            </div>
          </div>
          <section className='property__map map'></section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>
              Other places in the neighbourhood
            </h2>
            <div className='near-places__list places__list'>
              <PropertyComponent offer={offer}/>

              <PropertyComponent offer={offer}/>

              <PropertyComponent offer={offer}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PropertyPage;
