import { Fragment, ChangeEvent } from 'react';

type InputFormComponentProps = {
  onChange: (evt:ChangeEvent<HTMLInputElement>) => void;
  value: number;
};

const InputFormComponent = (props: InputFormComponentProps): JSX.Element => {
  const { value, onChange } = props;

  return (
    <Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={5 - value}
        id={`${5 - value}-stars`}
        type="radio"
        onChange={onChange}
      />
      <label
        htmlFor={`${5 - value}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect"
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
};

export default InputFormComponent;
