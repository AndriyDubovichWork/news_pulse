import React from 'react';
import style from './FileInput.module.scss';
function FileInput() {
  return (
    <label
      htmlFor={style.input}
      className={style.dropContainer}
      id={style.dropcontainer}
    >
      <span className={style.dropTitle}>Drop image here, paste or</span>
      <input type='file' className={style.input} />
    </label>
  );
}

export default FileInput;
