'use client';
import style from './Error.module.scss';

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
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
