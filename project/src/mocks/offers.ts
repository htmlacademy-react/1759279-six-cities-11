import {CardOffer} from '../types/offer';

export const offers: CardOffer[] = [
  {
    id: 1,
    src: '../img/apartment-01.jpg',
    title: 'Great apartments',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    premium: true, //TODO или boolean?
    type: 'apartment',
    rating: 8.5,
    bedrooms: 2,
    guests: 4,
    price: 100,
    facilities: ['Wifi'],
    proInfo: true,
    lat: 52.3909553943508,
    lng: 4.85309666406198,
  },
  {
    id: 2,
    src: '../img/apartment-02.jpg',
    title: 'The best room',
    description: 'Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ',
    premium: true, //TODO или boolean?
    type: 'room',
    rating: 7.5,
    bedrooms: 1,
    guests: 2,
    price: 60,
    facilities: ['Kitchen', 'Cable TV'],
    proInfo: true,
    lat: 52.3609553943508,
    lng: 4.85309666406198,
  },
  {
    id: 3,
    src: '../img/apartment-03.jpg',
    title: 'Cozy hotel',
    description: 'Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    premium: true, //TODO или boolean?
    type: 'hotel',
    rating: 9,
    bedrooms: 2,
    guests: 3,
    price: 120,
    facilities: ['Wifi', 'Heating'],
    proInfo: true,
    lat: 52.3909553943508,
    lng: 4.929309666406198,
  },
  {
    id: 4,
    src: '../img/apartment-01.jpg',
    title: 'Beautiful house',
    description: 'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    premium: false, //TODO или boolean?
    type: 'house',
    rating: 8,
    bedrooms: 4,
    guests: 8,
    price: 230,
    facilities: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    proInfo: true,
    lat: 52.3809553943508,
    lng: 4.939309666406198,
  },
  {
    id: 5,
    src: '../img/apartment-01.jpg',
    title: 'Apartment',
    description: 'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    premium: false, //TODO или boolean?
    type: 'house',
    rating: 7,
    bedrooms: 4,
    guests: 8,
    price: 230,
    facilities: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    proInfo: true,
    lat: 52.4109553944251,
    lng: 4.939309666406198,
  }
];
//Карточка предложения

//Фотографии
//Заголовок
//Подробное описание
//Премиальность
//Тип жилья - apartment, room, house, hotel
//Рейтинг
//Количество спален
//Максимальное количество гостей
//Стоимость аренды за ночь
//Список бытовых предметов в квартире - Wifi, Heating, Kitchen, Cable TV
//Информация о хозяине (подпись PRO)
