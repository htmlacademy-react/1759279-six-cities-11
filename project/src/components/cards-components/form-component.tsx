import { useState, ChangeEvent } from 'react';
import InputFormComponent from './input-form-component';


const FormComponent = (): JSX.Element => {

  const [reviewText, setReviewText] = useState('');
  const [, setReviewRating] = useState(0);

  const fieldChangeHandler = (evt:ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setReviewText(value);
  };

  const ratingChangeHandler = (evt:ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setReviewRating(+value);
  };

  return (
    <form className='reviews__form form' action='#' method='post'>
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>

        {
          Array.from({length: 5}, (v, i) => <InputFormComponent key={i} onChange={ratingChangeHandler} value={i}/>)
        }

      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        onChange={fieldChangeHandler}
        value={reviewText}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe your stay
          with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
