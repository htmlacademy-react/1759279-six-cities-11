import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
// import {CardReview} from './types/review';
// import {CardOffer} from './types/offer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      offers = {offers}
      reviews = {reviews}
    />
  </React.StrictMode>,
);
