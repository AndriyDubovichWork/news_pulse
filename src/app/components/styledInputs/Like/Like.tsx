import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import style from './like.module.scss';
function Like() {
  const [active, setActive] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div>
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
