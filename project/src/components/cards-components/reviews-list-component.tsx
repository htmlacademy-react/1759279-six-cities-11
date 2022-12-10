import { CardReview } from '../../types/review';
import { Fragment } from 'react';
import ReviewComponent from '../../components/cards-components/review-component';

type ReviewsListComponentProps = {
  reviews: CardReview[];
};

const ReviewsListComponent = (props: ReviewsListComponentProps): JSX.Element => {

  const {reviews} = props;

  return (
    <Fragment>
      <h2 className='reviews__title'>
        Reviews &middot; <span className='reviews__amount'>{reviews.length}</span>
      </h2>
      <ul className='reviews__list'>
        {// eslint-disable-next-line react/no-array-index-key
          reviews.map((review, i)=> <ReviewComponent key={i} review={review}/>)
        }
      </ul>
    </Fragment>
  );
};

export default ReviewsListComponent;
