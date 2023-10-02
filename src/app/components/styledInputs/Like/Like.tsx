import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import style from './like.module.scss';
import randomNumStrFormat from '@/app/lib/generateRandomNumberInStringFormat';
function Like() {
  const [active, setActive] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const [likes] = useState(randomNumStrFormat(1_000, 30_000));
  return (
    <div className={style.likesContainer}>
      {likes && <h3>{likes}</h3>}
      {active ? (
        <AiFillHeart
          className={style.active}
          onClick={() => {
            setActive(!active);
            setIsLiked(!isLiked);
          }}
        />
      ) : (
        <AiOutlineHeart
          className={style.inactive}
          onClick={() => {
            setActive(!active);
            setIsLiked(!isLiked);
          }}
        />
      )}
    </div>
  );
}

export default Like;
