import React from 'react';
import style from './Comment.module.scss';

type CommentT = {
  author: string;
  text: string;
};

function Comment({ author, text }: CommentT) {
  return (
    <div className={style.comment}>
      <h1 className={style.author}>{author}</h1>
      <p className={style.text}>{text}</p>
    </div>
  );
}

export default Comment;
