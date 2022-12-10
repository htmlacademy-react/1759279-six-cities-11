import { CardReview } from '../../types/review';

type ReviewComponentProps = {
  review: CardReview;
};

const ReviewComponent = (props: ReviewComponentProps): JSX.Element => {
  const { review } = props;
  const { avatar, rating, date, text } = review;

  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src={avatar}
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
            <span className='visually-hidden'>{rating}</span>
          </div>
        </div>
        <p className='reviews__text'>{text}</p>
        <time className='reviews__time' dateTime='2019-04-24'>
          {date}
        </time>
      </div>
    </li>
  );
};

export default ReviewComponent;
