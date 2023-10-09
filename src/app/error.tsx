'use client';
import style from './Error.module.scss';
import Button from './components/styledInputs/Button/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className={style.error}>
      <h2 className={style.message}>
        {error.message || 'Something went wrong!'}
      </h2>
      <Button
        onClick={() => reset()}
        value={'Try again'}
        className={style.button}
      />
    </div>
  );
}
