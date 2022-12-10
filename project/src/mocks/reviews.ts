import {CardReview} from '../types/review';


export const reviews: CardReview[] = [
  {
    id: 1,
    avatar: '../img/avatar-max.jpg',
    rating: 3,
    date: '01.01.2022', //TODO какой здесь тип правильнее указать?
    text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    avatar: '../img/avatar-angelina.jpg',
    rating: 4,
    date: '12.05xs.2022', //TODO какой здесь тип правильнее указать?
    text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    avatar: '../img/avatar-max.jpg',
    rating: 2,
    date: '20.04.2021', //TODO какой здесь тип правильнее указать?
    text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    avatar: '../img/avatar-angelina.jpg',
    rating: 5,
    date: '30.09.2022', //TODO какой здесь тип правильнее указать?
    text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
  },
];
//Аватар автора.
//Имя автора.
//Оценку. Оценка выводится в виде закрашенных звезд. Максимальное количество звёзд — 5.
//Дата отзыва в формате: Месяц Год. Например: April 2019.
//Текст отзыва.
